export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
};