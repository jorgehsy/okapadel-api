module.exports = {
  apps : [{
    name: 'strapi',
    script: 'npm',
    args: 'run develop',
    instances: 1,
    autorestart: true,
    watch: false,
  }],

};
