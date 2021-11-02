// class a {
//     public static async sendMessage(message: Command<any>): Promise<any> {
//         return new Promise((resolve, reject) => {
//             chrome.runtime.sendMessage(message, (result: CommandExecResult) => {
//                 if (result.isSuccess) {
//                     return resolve(result.payload);
//                 } else {
//                     return reject(result.payload);
//                 }
//             });
//         });
//     }
// }