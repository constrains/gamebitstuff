import { db } from "@/firebase/firebaseconfig";
import { getDoc, doc } from "firebase/firestore";

let fetchedGameIds = [];

const userDocRef = doc(db, "clientData", "SNXk85mhndQr449DwQjDIYWqr362");
const userDocSnap = await getDoc(userDocRef);

if (userDocSnap.exists()) {
    const dbUniverseIds = userDocSnap.data().dbUniverseIds || [];
    fetchedGameIds = [...dbUniverseIds];
} else {
    console.log("No such document!");
}

const UNIVERSE_IDS = fetchedGameIds;

const UNIVERSE_IDS_STRING = UNIVERSE_IDS.join(',');

export async function fetchGames() {
    const gamesUrl = `https://games.roblox.com/v1/games?universeIds=${UNIVERSE_IDS_STRING}`;
    const thumbnailUrl = `https://thumbnails.roblox.com/v1/games/icons?universeIds=${UNIVERSE_IDS_STRING}&returnPolicy=PlaceHolder&size=512x512&format=Webp&isCircular=false`;
    // const thumbnailUrl = `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${UNIVERSE_IDS_STRING}&countPerUniverse=1&defaults=true&size=768x432&format=Webp&isCircular=false`;

    try {
        const [gamesResponse, thumbnailResponse] = await Promise.all([
            fetch(gamesUrl, { next: { revalidate: 60 } }),
            fetch(thumbnailUrl, { next: { revalidate: 60 } })
        ]);

        if (!gamesResponse.ok || !thumbnailResponse.ok) {
            throw new Error(`HTTP error! status: ${gamesResponse.status} ${thumbnailResponse.status}`);
        }

        const gamesData = await gamesResponse.json();
        const thumbnailData = await thumbnailResponse.json();

        const games = gamesData.data.map(game => {
            const thumbnail = thumbnailData.data.find(item => item.targetId === game.id);
            return {
                id: game.id,
                name: game.name,
                playing: game.playing,
                visits: game.visits,
                thumbnailUrl: thumbnail ? thumbnail.imageUrl : null,
                placeId: game.rootPlaceId
            };
        });

        games.sort((a, b) => b.playing - a.playing);

        const totalPlayers = games.reduce((sum, game) => sum + game.playing, 0);
        const totalVisits = games.reduce((sum, game) => sum + game.visits, 0);

        return {
            games,
            totalGames: games.length,
            totalPlayers,
            totalVisits
        };
    } catch (error) {
        console.error('Error fetching games:', error);
        return {
            games: [],
            totalGames: 0,
            totalPlayers: 0,
            totalVisits: 0
        };
    }
}