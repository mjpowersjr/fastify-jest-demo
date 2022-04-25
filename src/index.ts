import process from 'process';
import { server } from "./server";


async function main(args: string[]) {
    await server.listen(5000);
}


const args = process.argv.slice(2);

main(args).catch((e) => {
    console.error(e);
    process.exit(1);
})
