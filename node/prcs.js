/**
 * Created by muyi on 14-9-25.
 */
console.log(process.cwd());
//console.log(process.env);

process.stdout.write('构建工具：');

process.stdin.resume();
process.stdin.setEncoding('utf-8');


process.stdin.on('data', function(data){
    process.stdin.pause();
    console.log(data);
    console.log(process.argv);
    console.log(process.execArgv);
    process.kill(process.pid, 'SIGINT');
});

process.on('SIGINT', function(data) {
    console.log('收到 SIGINT 信号。  退出请使用 Ctrl + D ');
});

process.stdin.on('end', function() {
    process.stdout.write('end');
});

