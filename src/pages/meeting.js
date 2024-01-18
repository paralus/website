import React from 'react';
import { useState, useEffect } from 'react';

export default function Redirect() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.replace('https://us05web.zoom.us/j/81720086645?pwd=GbNLEJBAqrOe7QeQrvTyFcIpWJs0lF.1');
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
    return <>You will redirect in 2 seconds. If not redirected automatically, click on <a href="https://us05web.zoom.us/j/81720086645?pwd=GbNLEJBAqrOe7QeQrvTyFcIpWJs0lF.1">link</a> </>;
}
