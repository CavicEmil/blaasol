import { useState, useEffect } from 'react';

const loggedin = true;

export default function Header() {
    return(
        <div className="flex justify-around">
            { loggedin 
            ?
            <>
                <h2>
                    Her er web apps hovedet
                </h2>
                <p>Hallo her er din profil</p>
            </>
            :
            <>
                <h2>
                    Her er web apps hovedet
                </h2>
                <p>Login</p>
            </>
            }
        </div>
    )
}