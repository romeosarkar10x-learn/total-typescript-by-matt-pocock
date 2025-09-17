const fetchData = async <T>(url: string): Promise<T> => {
    const data: T = await fetch(url).then((data): Promise<T> => data.json());
    return data;
};

const data = await fetchData<{ name: string }>("https://google.com");
