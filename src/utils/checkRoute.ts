export function checkRoute( route: string ) {
    const result = route.match( /calendar\/(.*)/ );
    return (result && result[ 1 ]) || '';
}
