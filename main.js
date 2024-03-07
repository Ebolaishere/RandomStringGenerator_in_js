            function generateRandomString(length) {
                const characters = '_-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = ' ';
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random(24) * characters.length));
                }
                return result;
            }
