// Monatsnamen für die Formatierung
const monthNames: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const currentDate: Date = new Date();

const last30DaysFormatted: string[] = [];

for (let i: number = 29; i >= 0; i--) {
    const date: Date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);

    const formattedDate: string = `${monthNames[date.getMonth()]} ${date.getDate()}`;
    last30DaysFormatted.push(formattedDate);
}

export default last30DaysFormatted
