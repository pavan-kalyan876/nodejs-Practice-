import os from "os";
console.log(os.platform()); // return the system platform like win32
console.log(os.arch()); // return the cpu architecture x64
console.log(os.type()); // return the os name('windows-nt'or'linux)
console.log(os.release()); // return the os version
console.log(os.uptime()); // return the uptime
console.log(os.hostname()); // return the device name of setting
console.log(os.totalmem()); // return memeory in bytes
console.log(os.freemem()); // return free memory in bytes
console.log(os.cpus()); // return the of cpu,model,sys,idle in arr obj
console.log(os.networkInterfaces()); // return the network interface details
console.log(os.homedir()); // return home directory of your pc
console.log(os.tmpdir()); // return the temp directory
console.log(os.userInfo()); //  details about user
console.log(os.endianness()); // return the cpu be or le 
