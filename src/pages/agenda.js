import React from 'react';
import { useState, useEffect } from 'react';

export default function Redirect() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.replace('https://docs.google.com/document/d/1yX2Y9ZJa0g4RLYG8rGp55pFTiEfHo1LpiF5p3ut3P1s');
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
    return <>You will redirect in 2 seconds. If not redirected automatically, click on <a href="https://docs.google.com/document/d/1yX2Y9ZJa0g4RLYG8rGp55pFTiEfHo1LpiF5p3ut3P1s">link</a> </>;
}
