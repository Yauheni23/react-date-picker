import { LocalStorage } from './localStorage';

enum apiType {
    localstorage = 'localstorage',
    server = 'server'
}

export class Request {
    private readonly apiType: apiType = apiType.localstorage;
    private readonly featureName: string;

    constructor( featureName: string ) {
        this.featureName = featureName;
    }

    public get( id: string ) {
        return this.makeGetRequest( id );
    }

    public getAll() {
        return this.makeGetAllRequest();
    }

    public set( data: any ) {
        return this.makeSetRequest( data );
    }

    private makeGetRequest( id: string): any {
        switch ( this.apiType ) {
            case apiType.localstorage:
            default:
                return LocalStorage.get( id, this.featureName );

        }
    }

    private makeGetAllRequest(): any {
        switch ( this.apiType ) {
            case apiType.localstorage:
            default:
                return LocalStorage.getAll( this.featureName );

        }
    }

    private makeSetRequest(data: any): any {
        switch ( this.apiType ) {
            case apiType.localstorage:
            default:
                return LocalStorage.set(this.featureName, data);
        }
    }
}