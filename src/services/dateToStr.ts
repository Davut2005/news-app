
export const dateToStr = (isoDate: string | undefined ): string => {
    const date = new Date(isoDate || "2024-10-19T08:54:21Z");

    // Format the date to a more readable format
    const options : Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
    };

    return date.toLocaleDateString('en-US', options);
} 
