export interface Framework {
    name: string;
    displayName: string;
    path: string | URL;
    color: string;
}

export const frameworks: Framework[] = [
    { name: 'home', displayName: 'Home', path: '/', color: '#FF5D01' },
    { name: 'about', displayName: 'About', path: '/about', color: '#61DAFB' },
    { name: 'gallery', displayName: 'Team', path: '/team', color: '#4FC08D' },
    { name: 'team', displayName: 'Gallery', path: '/gallery', color: '#FF3E00' },
    { name: 'stats', displayName: 'Stats', path: 'https://ftcscout.org/teams/12499', color: '#2C4F7C' },
];
