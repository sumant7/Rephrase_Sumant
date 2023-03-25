const fs = require("fs");
const pdfParse = require("pdf-parse");

// let s = "";
let s = [];

const getPDF = async (file) => {
  let readFileSync = fs.readFileSync(file);
  try {
    let pdfExtract = await pdfParse(readFileSync);
    s = pdfExtract.text.split("\n");
    // console.log(s)

    const title = "Hello my name is " + s[3];
    const desc = "I am a " + s[7] + s[8] + s[9] + s[10] + s[11] + s[12] + s[13] + s[14] + s[15] + s[16] + s[17] + s[18];
    const skills =
      "My Skills are " + s[21] + s[22] + s[23] + s[24] + s[25]
    const work = "I have worked as " + s[29] + s[30] + s[31] + s[32] + s[33] + s[34] + s[35] + s[36] + s[37] + s[38] + s[39] + s[40] + s[41] + s[42] + s[43] + s[44] + s[45] + s[46] + s[47] + s[48] + s[49] + s[50] + s[51] + s[52] + s[53] + s[54] + s[55] + s[56] + s[57]

    const val = [
      {
        trans: title,
        bg: "https://www.shutterstock.com/image-photo/top-view-design-on-blue-260nw-2100071413.jpg",
      },
      {
        trans: desc,
        bg: "https://c4.wallpaperflare.com/wallpaper/826/524/865/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
      },
      {
        trans: skills,
        bg: "https://images.hdqwalls.com/wallpapers/bthumb/2023-lamborghini-huracan-gt3-evo-3s.jpg",
      },
      {
        trans: work,
        bg: "https://img.freepik.com/premium-photo/back-school-education-banner-background_8087-1192.jpg",
      },
    ];

    const sdk = require("api")("@rephrase-studio-api/v1.0#aiax22wldy2399p");

    sdk
      .postCampaign(
        {
          is_single_video: true,
          video_data: {
            elements: {
              scene_1_spokesperson_asset: {
                id: "scene_1_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak> ${val[0].trans} </speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_1" },
                endTime: { timeframeId: "scene_1" },
              },
              scene_1_background_image: {
                id: "scene_1_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[0].bg,
                },
                startTime: { timeframeId: "scene_1" },
                endTime: { timeframeId: "scene_1" },
              },

              scene_2_spokesperson_asset: {
                id: "scene_2_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[1].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_2" },
                endTime: { timeframeId: "scene_2" },
              },
              scene_2_background_image: {
                id: "scene_2_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[1].bg,
                },
                startTime: { timeframeId: "scene_2" },
                endTime: { timeframeId: "scene_2" },
              },


              scene_3_spokesperson_asset: {
                id: "scene_3_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[2].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_3" },
                endTime: { timeframeId: "scene_3" },
              },
              scene_3_background_image: {
                id: "scene_3_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[2].bg,
                },
                startTime: { timeframeId: "scene_3" },
                endTime: { timeframeId: "scene_3" },
              },



              scene_4_spokesperson_asset: {
                id: "scene_4_spokesperson_asset",
                draft: true,
                style: {
                  position: "absolute",
                  zIndex: 2,
                  bottom: "0em",
                  objectFit: "cover",
                  height: "37.5em",
                  width: "66.66666666666667em",
                  left: "16.666666666666664em",
                },
                asset: {
                  kind: "Spokesperson",
                  spokespersonVideo: {
                    model: "danielle_pettee_look_2_nt_aug_2022",
                    voiceId: "7bc739a4-7abc-46db-bc75-e24b6f899fa9__005",
                    langugae: "en-US",
                    output_params: {
                      video: {
                        crop: { preset: "MS" },
                        resolution: { height: 720, width: 1280 },
                        background: { alpha: 0 },
                      },
                    },
                    gender: "female",
                    transcript: `<speak>${val[3].trans}</speak>`,
                    transcript_type: "ssml_limited",
                  },
                },
                startTime: { timeframeId: "scene_4" },
                endTime: { timeframeId: "scene_4" },
              },
              scene_4_background_image: {
                id: "scene_4_background_image",
                style: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1,
                },
                asset: {
                  kind: "Image",
                  use: "Background",
                  url: val[3].bg,
                },
                startTime: { timeframeId: "scene_4" },
                endTime: { timeframeId: "scene_4" },
              },




              
            },
            timeline: [
              {
                draft: true,
                id: "scene_1",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_2",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_3",
                type: "clock",
              },
              {
                draft: true,
                id: "scene_4",
                type: "clock",
              },
            ],
            video_dimension: { height: 1080, width: 1920 },
            id: "video_data",
            title: "16:9 Widescreen Blank Canvas",
            thumbnailUrl:
              "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/cold_reachout_1.png",
          },
        },
        {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTE0NDg1NTk0ODAxODg2NTE1NTYiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzU5OTk2LCJleHAiOjE2Nzk4NDYzOTYsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.cFgZBDMhC4XPNWlB63A6cu1k1kkBisoMBeSZj6GD6Ds6alojn2N2RxFdzyME91cs_z-kAD-yXAE6blKxK90ANSzti7Plm12wx_ihLPM3LPdv6P6lUNe1KSYlAeEi4UbVGCgoSokhk_gmJ7mAEHF9zIJtGS_dn8PvMUq7z2pec-w5_IWHFBpTqBYiDoJh5OC2d_Ybg9jrCos0SaK6P0n1ncZMXGt2kyYuSI7WAEh20KRthfKSq7j-vSprsh9vp8oJ-0JtNd0rKbh77qyMuCM74IxiMPz8iUBHMO5HEemDYIWlE_aKyKoVRHMkkghQ1umLMhkN1ul1rIeSABHQfISzxw",
        }
      )
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  } catch (error) {
    throw new Error(error);
  }
};
const pdfRead = "./demo.pdf";
getPDF(pdfRead);
