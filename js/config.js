// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Bienvenue sur notre serveur !",
  "Profitez de votre expérience de jeu !",
  "N'oubliez pas de lire nos règles sur le forum !",
  "Rejoignez notre Discord pour rester informé !",
  "Merci d'être parmi nous !",
  "Amusez-vous bien !",
  "Rappelez-vous : respectez les autres joueurs !",
  "Besoin d'aide ? Contactez un admin en jeu !",
  "Merci à Ferty pour ce superbe Loading Screen !"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
