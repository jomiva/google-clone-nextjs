# Google clone made with Nextjs SSR and TailwindCSS.

You can see online demo here: https://google-clone-nextjs-jomiva.vercel.app/.
Currently the online demo is using static data located at `./response.js` this is because google's api is limited to 100 request per day. If you'd to use google's api, you will need to provide your own api and context key and declare them at `./keys.js`: 

    export const API_KEY = "yourkey";
    export const CONTEXT_KEY = "yourkey";

Once you have provided your keys you will need to change the static fetch flag at `./pages/search.jsx`:


    export async function getServerSideProps(context) {
      const useStaticData = true; // <- change it to false if you want to consume google's api
      const startIndex = context.query.start || 0;
      const data = useStaticData
        ? Response
        : await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
          ).then((resp) => resp.json());
      return {
        props: {
          results: data,
        },
      };
    }

# Images 

#### Home PC
[![Home - PC](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579820/DeepinScreenshot_select-area_20210416093005_bhscfp.png "Home - PC")](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579820/DeepinScreenshot_select-area_20210416093005_bhscfp.png "Home - PC")

#### Search PC
[![Search - PC](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579850/DeepinScreenshot_select-area_20210416093040_bpps8q.png "Search - PC")](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579850/DeepinScreenshot_select-area_20210416093040_bpps8q.pnghttp:// "Search - PC")

#### Home Mobile
[![Home - Mobile](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579928/DeepinScreenshot_select-area_20210416093151_ayjrpn.png "Home - Mobile")](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579928/DeepinScreenshot_select-area_20210416093151_ayjrpn.pnghttp:// "Home - Mobile")

#### Search Mobile
[![Search - Mobile](https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579930/DeepinScreenshot_select-area_20210416093138_djz99i.png "Search - Mobile")](http://https://res.cloudinary.com/dzu5vmaht/image/upload/v1618579930/DeepinScreenshot_select-area_20210416093138_djz99i.png "Search - Mobile")

That's all folks! Feel free to do all your changes you want to :)
Made in Venezuela. @jomiva.
