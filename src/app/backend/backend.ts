export const delay = async () =>
    new Promise((resolve) => setTimeout(resolve, 1000));

export const login = async (username: string, password: string) => {
    await delay();
    return username === 'admin' && password === 'admin'
        ? {token: '32u23ijhbasdj1jhbd'}
        : undefined;
};

export const getSource = async () => {
    await delay();
    const res = [];
    for (let i = 0; i < 1000; i++) {
        res.push({
            id: i,
            user: `User ${i}`,
            data: Math.random()
        });
    }
    return res;
};
