const isoTimeFormat = (dateTime) => {
    const date = new Date(dateTime);
    const localTime = date.toLocaleTimeString('en',{
        hours: '2-digit',
        minutes: '2-digits',
        hours12: true,
    });
    return localTime;
}

export default isoTimeFormat