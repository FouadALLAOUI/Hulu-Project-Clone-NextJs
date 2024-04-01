module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'links.papareact.com',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**',
            },

        ],
    },
};