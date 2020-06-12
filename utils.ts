
export function firstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
export function lastDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export const isMobile = process.client ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;

export function pesudoDownloadBlob(blob: Blob, filename: string) {
    if (!blob.size) return;
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
}
