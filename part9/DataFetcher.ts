class NetworkError extends Error {
    constructor(message: string, public status: number) {
        super(message);
        this.name = 'NetworkError';
    }
}

interface IDataFetcher<T> {
    fetchData(): Promise<T | undefined>;
    processData(data: T): void;
    execute(): Promise<void>;
    setUrl(url: string): void;
}

class DataFetcher<T> implements IDataFetcher<T> {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }


    public async fetchData(): Promise<T | undefined> {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new NetworkError(`HTTP error! status: ${response.status}`, response.status);
            }
            const data: T = await response.json();
            return data;
        } catch (error) {
            this.logError(error);
        }
    }

    public processData(data: T): void {
        this.log(`Fetched data: ${JSON.stringify(data)}`);
    }

    public async execute(): Promise<void> {
        const data = await this.fetchData();
        if (data) {
            this.processData(data);
        }
    }

    protected log(message: string): void {
        console.log(message);
    }

    protected logError(error: unknown): void {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
            if (error instanceof NetworkError) {
                console.error(`Status Code: ${error.status}`);
            }
        } else {
            console.error('Unknown error:', error);
        }
    }
}

interface IResponseData {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export async function task9() {
    console.log('Task 9 running:');

    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const fetcher = new DataFetcher<IResponseData>(url);
    await fetcher.execute();
    console.log('----------------------------------');
}
