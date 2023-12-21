import { useEffect, useState } from "react";

export function Friends() {
    const [kaka, setKaka] = useState();
    const [transfer, setTransfer] = useState([]);
    async function getUsers() {
        try {
            const response = await fetch("https://randomuser.me/api/");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setKaka(data);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        getUsers();
    }, [transfer]);

    useEffect(() => {
       console.log(kaka && kaka.results[0])
    }, [kaka]);
        
        return (
            <>
            <button onClick={() => setTransfer(!transfer)}>Alla kakor!!!!!!!</button>
        
            {<p>test { kaka && kaka.results["cell"]}</p>}
            {<p>kaka { kaka && kaka.results["cell"]}</p>}

        </>
    );
}
