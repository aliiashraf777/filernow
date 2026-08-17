// lib/api/client.ts
export async function apiClient(input: string, init: RequestInit = {}) {
    const res = await fetch(input, { ...init, credentials: "include" });

    if (res.status === 401) {
        const refreshed = await fetch("/api/auth/refresh", { method: "POST" });
        if (refreshed.ok) {
            return fetch(input, { ...init, credentials: "include" });
        }
        window.location.href = "/login";
    }

    return res;
}