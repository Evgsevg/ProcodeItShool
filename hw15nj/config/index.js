const config={
    local:{
    mode:'local',
    port:3000
    },
    stagingl:{
        mode:'staging',
        port:4000
        },
        production:{
            mode:'production',
            port:5500
            }
                
}
module.exports= function(mode)
{
    return config[mode || process.argv[2] || 'local' || config.local];
}