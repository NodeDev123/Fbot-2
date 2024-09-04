const handleError = async (err, ctx) => {
    await ctx.telegram.sendMessage("1782278519", `${err}\n\n${new Date()}`);
    console.log(err);
};

export { handleError };
