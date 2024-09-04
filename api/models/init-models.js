var DataTypes = require("sequelize").DataTypes;
var _VAccessControlNodes = require("./vAccessControlNodes");
var _VAccessControls = require("./vAccessControls");
var _VBridges = require("./vBridges");
var _VCallBlock = require("./vCallBlock");
var _VCallBroadcasts = require("./vCallBroadcasts");
var _VCallCenterAgents = require("./vCallCenterAgents");
var _VCallCenterQueues = require("./vCallCenterQueues");
var _VCallCenterTiers = require("./vCallCenterTiers");
var _VCallFlows = require("./vCallFlows");
var _VConferenceCenters = require("./vConferenceCenters");
var _VConferenceControlDetails = require("./vConferenceControlDetails");
var _VConferenceControls = require("./vConferenceControls");
var _VConferenceProfileParams = require("./vConferenceProfileParams");
var _VConferenceProfiles = require("./vConferenceProfiles");
var _VConferenceRoomUsers = require("./vConferenceRoomUsers");
var _VConferenceRooms = require("./vConferenceRooms");
var _VConferenceSessionDetails = require("./vConferenceSessionDetails");
var _VConferenceSessions = require("./vConferenceSessions");
var _VConferenceUsers = require("./vConferenceUsers");
var _VConferences = require("./vConferences");
var _VContactAddresses = require("./vContactAddresses");
var _VContactAttachments = require("./vContactAttachments");
var _VContactEmails = require("./vContactEmails");
var _VContactGroups = require("./vContactGroups");
var _VContactNotes = require("./vContactNotes");
var _VContactPhones = require("./vContactPhones");
var _VContactRelations = require("./vContactRelations");
var _VContactSettings = require("./vContactSettings");
var _VContactTimes = require("./vContactTimes");
var _VContactUrls = require("./vContactUrls");
var _VContactUsers = require("./vContactUsers");
var _VContacts = require("./vContacts");
var _VCountries = require("./vCountries");
var _VDashboard = require("./vDashboard");
var _VDashboardGroups = require("./vDashboardGroups");
var _VDatabaseTransactions = require("./vDatabaseTransactions");
var _VDatabases = require("./vDatabases");
var _VDefaultSettings = require("./vDefaultSettings");
var _VDestinations = require("./vDestinations");
var _VDeviceKeys = require("./vDeviceKeys");
var _VDeviceLines = require("./vDeviceLines");
var _VDeviceProfileKeys = require("./vDeviceProfileKeys");
var _VDeviceProfileSettings = require("./vDeviceProfileSettings");
var _VDeviceProfiles = require("./vDeviceProfiles");
var _VDeviceSettings = require("./vDeviceSettings");
var _VDeviceVendorFunctionGroups = require("./vDeviceVendorFunctionGroups");
var _VDeviceVendorFunctions = require("./vDeviceVendorFunctions");
var _VDeviceVendors = require("./vDeviceVendors");
var _VDevices = require("./vDevices");
var _VDialplanDetails = require("./vDialplanDetails");
var _VDialplans = require("./vDialplans");
var _VDomainSettings = require("./vDomainSettings");
var _VDomains = require("./vDomains");
var _VEmailQueue = require("./vEmailQueue");
var _VEmailQueueAttachments = require("./vEmailQueueAttachments");
var _VEmailTemplates = require("./vEmailTemplates");
var _VEmergencyLogs = require("./vEmergencyLogs");
var _VEventGuardLogs = require("./vEventGuardLogs");
var _VExtensionSettings = require("./vExtensionSettings");
var _VExtensionUsers = require("./vExtensionUsers");
var _VExtensions = require("./vExtensions");
var _VFax = require("./vFax");
var _VFaxFiles = require("./vFaxFiles");
var _VFaxLogs = require("./vFaxLogs");
var _VFaxQueue = require("./vFaxQueue");
var _VFaxUsers = require("./vFaxUsers");
var _VFollowMe = require("./vFollowMe");
var _VFollowMeDestinations = require("./vFollowMeDestinations");
var _VGateways = require("./vGateways");
var _VGroupPermissions = require("./vGroupPermissions");
var _VGroups = require("./vGroups");
var _VIvrMenuOptions = require("./vIvrMenuOptions");
var _VIvrMenus = require("./vIvrMenus");
var _VLanguages = require("./vLanguages");
var _VMenuItemGroups = require("./vMenuItemGroups");
var _VMenuItems = require("./vMenuItems");
var _VMenuLanguages = require("./vMenuLanguages");
var _VMenus = require("./vMenus");
var _VModules = require("./vModules");
var _VMusicOnHold = require("./vMusicOnHold");
var _VNotifications = require("./vNotifications");
var _VNumberTranslationDetails = require("./vNumberTranslationDetails");
var _VNumberTranslations = require("./vNumberTranslations");
var _VPermissions = require("./vPermissions");
var _VPhraseDetails = require("./vPhraseDetails");
var _VPhrases = require("./vPhrases");
var _VPinNumbers = require("./vPinNumbers");
var _VRecordings = require("./vRecordings");
var _VRingGroupDestinations = require("./vRingGroupDestinations");
var _VRingGroupUsers = require("./vRingGroupUsers");
var _VRingGroups = require("./vRingGroups");
var _VSipProfileDomains = require("./vSipProfileDomains");
var _VSipProfileSettings = require("./vSipProfileSettings");
var _VSipProfiles = require("./vSipProfiles");
var _VSofiaGlobalSettings = require("./vSofiaGlobalSettings");
var _VSoftware = require("./vSoftware");
var _VStreams = require("./vStreams");
var _VUserGroups = require("./vUserGroups");
var _VUserLogs = require("./vUserLogs");
var _VUserSettings = require("./vUserSettings");
var _VUsers = require("./vUsers");
var _VVars = require("./vVars");
var _VVoicemailDestinations = require("./vVoicemailDestinations");
var _VVoicemailGreetings = require("./vVoicemailGreetings");
var _VVoicemailMessages = require("./vVoicemailMessages");
var _VVoicemailOptions = require("./vVoicemailOptions");
var _VVoicemails = require("./vVoicemails");
var _VXmlCdr = require("./vXmlCdr");

function initModels(sequelize) {
  var VAccessControlNodes = _VAccessControlNodes(sequelize, DataTypes);
  var VAccessControls = _VAccessControls(sequelize, DataTypes);
  var VBridges = _VBridges(sequelize, DataTypes);
  var VCallBlock = _VCallBlock(sequelize, DataTypes);
  var VCallBroadcasts = _VCallBroadcasts(sequelize, DataTypes);
  var VCallCenterAgents = _VCallCenterAgents(sequelize, DataTypes);
  var VCallCenterQueues = _VCallCenterQueues(sequelize, DataTypes);
  var VCallCenterTiers = _VCallCenterTiers(sequelize, DataTypes);
  var VCallFlows = _VCallFlows(sequelize, DataTypes);
  var VConferenceCenters = _VConferenceCenters(sequelize, DataTypes);
  var VConferenceControlDetails = _VConferenceControlDetails(sequelize, DataTypes);
  var VConferenceControls = _VConferenceControls(sequelize, DataTypes);
  var VConferenceProfileParams = _VConferenceProfileParams(sequelize, DataTypes);
  var VConferenceProfiles = _VConferenceProfiles(sequelize, DataTypes);
  var VConferenceRoomUsers = _VConferenceRoomUsers(sequelize, DataTypes);
  var VConferenceRooms = _VConferenceRooms(sequelize, DataTypes);
  var VConferenceSessionDetails = _VConferenceSessionDetails(sequelize, DataTypes);
  var VConferenceSessions = _VConferenceSessions(sequelize, DataTypes);
  var VConferenceUsers = _VConferenceUsers(sequelize, DataTypes);
  var VConferences = _VConferences(sequelize, DataTypes);
  var VContactAddresses = _VContactAddresses(sequelize, DataTypes);
  var VContactAttachments = _VContactAttachments(sequelize, DataTypes);
  var VContactEmails = _VContactEmails(sequelize, DataTypes);
  var VContactGroups = _VContactGroups(sequelize, DataTypes);
  var VContactNotes = _VContactNotes(sequelize, DataTypes);
  var VContactPhones = _VContactPhones(sequelize, DataTypes);
  var VContactRelations = _VContactRelations(sequelize, DataTypes);
  var VContactSettings = _VContactSettings(sequelize, DataTypes);
  var VContactTimes = _VContactTimes(sequelize, DataTypes);
  var VContactUrls = _VContactUrls(sequelize, DataTypes);
  var VContactUsers = _VContactUsers(sequelize, DataTypes);
  var VContacts = _VContacts(sequelize, DataTypes);
  var VCountries = _VCountries(sequelize, DataTypes);
  var VDashboard = _VDashboard(sequelize, DataTypes);
  var VDashboardGroups = _VDashboardGroups(sequelize, DataTypes);
  var VDatabaseTransactions = _VDatabaseTransactions(sequelize, DataTypes);
  var VDatabases = _VDatabases(sequelize, DataTypes);
  var VDefaultSettings = _VDefaultSettings(sequelize, DataTypes);
  var VDestinations = _VDestinations(sequelize, DataTypes);
  var VDeviceKeys = _VDeviceKeys(sequelize, DataTypes);
  var VDeviceLines = _VDeviceLines(sequelize, DataTypes);
  var VDeviceProfileKeys = _VDeviceProfileKeys(sequelize, DataTypes);
  var VDeviceProfileSettings = _VDeviceProfileSettings(sequelize, DataTypes);
  var VDeviceProfiles = _VDeviceProfiles(sequelize, DataTypes);
  var VDeviceSettings = _VDeviceSettings(sequelize, DataTypes);
  var VDeviceVendorFunctionGroups = _VDeviceVendorFunctionGroups(sequelize, DataTypes);
  var VDeviceVendorFunctions = _VDeviceVendorFunctions(sequelize, DataTypes);
  var VDeviceVendors = _VDeviceVendors(sequelize, DataTypes);
  var VDevices = _VDevices(sequelize, DataTypes);
  var VDialplanDetails = _VDialplanDetails(sequelize, DataTypes);
  var VDialplans = _VDialplans(sequelize, DataTypes);
  var VDomainSettings = _VDomainSettings(sequelize, DataTypes);
  var VDomains = _VDomains(sequelize, DataTypes);
  var VEmailQueue = _VEmailQueue(sequelize, DataTypes);
  var VEmailQueueAttachments = _VEmailQueueAttachments(sequelize, DataTypes);
  var VEmailTemplates = _VEmailTemplates(sequelize, DataTypes);
  var VEmergencyLogs = _VEmergencyLogs(sequelize, DataTypes);
  var VEventGuardLogs = _VEventGuardLogs(sequelize, DataTypes);
  var VExtensionSettings = _VExtensionSettings(sequelize, DataTypes);
  var VExtensionUsers = _VExtensionUsers(sequelize, DataTypes);
  var VExtensions = _VExtensions(sequelize, DataTypes);
  var VFax = _VFax(sequelize, DataTypes);
  var VFaxFiles = _VFaxFiles(sequelize, DataTypes);
  var VFaxLogs = _VFaxLogs(sequelize, DataTypes);
  var VFaxQueue = _VFaxQueue(sequelize, DataTypes);
  var VFaxUsers = _VFaxUsers(sequelize, DataTypes);
  var VFollowMe = _VFollowMe(sequelize, DataTypes);
  var VFollowMeDestinations = _VFollowMeDestinations(sequelize, DataTypes);
  var VGateways = _VGateways(sequelize, DataTypes);
  var VGroupPermissions = _VGroupPermissions(sequelize, DataTypes);
  var VGroups = _VGroups(sequelize, DataTypes);
  var VIvrMenuOptions = _VIvrMenuOptions(sequelize, DataTypes);
  var VIvrMenus = _VIvrMenus(sequelize, DataTypes);
  var VLanguages = _VLanguages(sequelize, DataTypes);
  var VMenuItemGroups = _VMenuItemGroups(sequelize, DataTypes);
  var VMenuItems = _VMenuItems(sequelize, DataTypes);
  var VMenuLanguages = _VMenuLanguages(sequelize, DataTypes);
  var VMenus = _VMenus(sequelize, DataTypes);
  var VModules = _VModules(sequelize, DataTypes);
  var VMusicOnHold = _VMusicOnHold(sequelize, DataTypes);
  var VNotifications = _VNotifications(sequelize, DataTypes);
  var VNumberTranslationDetails = _VNumberTranslationDetails(sequelize, DataTypes);
  var VNumberTranslations = _VNumberTranslations(sequelize, DataTypes);
  var VPermissions = _VPermissions(sequelize, DataTypes);
  var VPhraseDetails = _VPhraseDetails(sequelize, DataTypes);
  var VPhrases = _VPhrases(sequelize, DataTypes);
  var VPinNumbers = _VPinNumbers(sequelize, DataTypes);
  var VRecordings = _VRecordings(sequelize, DataTypes);
  var VRingGroupDestinations = _VRingGroupDestinations(sequelize, DataTypes);
  var VRingGroupUsers = _VRingGroupUsers(sequelize, DataTypes);
  var VRingGroups = _VRingGroups(sequelize, DataTypes);
  var VSipProfileDomains = _VSipProfileDomains(sequelize, DataTypes);
  var VSipProfileSettings = _VSipProfileSettings(sequelize, DataTypes);
  var VSipProfiles = _VSipProfiles(sequelize, DataTypes);
  var VSofiaGlobalSettings = _VSofiaGlobalSettings(sequelize, DataTypes);
  var VSoftware = _VSoftware(sequelize, DataTypes);
  var VStreams = _VStreams(sequelize, DataTypes);
  var VUserGroups = _VUserGroups(sequelize, DataTypes);
  var VUserLogs = _VUserLogs(sequelize, DataTypes);
  var VUserSettings = _VUserSettings(sequelize, DataTypes);
  var VUsers = _VUsers(sequelize, DataTypes);
  var VVars = _VVars(sequelize, DataTypes);
  var VVoicemailDestinations = _VVoicemailDestinations(sequelize, DataTypes);
  var VVoicemailGreetings = _VVoicemailGreetings(sequelize, DataTypes);
  var VVoicemailMessages = _VVoicemailMessages(sequelize, DataTypes);
  var VVoicemailOptions = _VVoicemailOptions(sequelize, DataTypes);
  var VVoicemails = _VVoicemails(sequelize, DataTypes);
  var VXmlCdr = _VXmlCdr(sequelize, DataTypes);


  return {
    VAccessControlNodes,
    VAccessControls,
    VBridges,
    VCallBlock,
    VCallBroadcasts,
    VCallCenterAgents,
    VCallCenterQueues,
    VCallCenterTiers,
    VCallFlows,
    VConferenceCenters,
    VConferenceControlDetails,
    VConferenceControls,
    VConferenceProfileParams,
    VConferenceProfiles,
    VConferenceRoomUsers,
    VConferenceRooms,
    VConferenceSessionDetails,
    VConferenceSessions,
    VConferenceUsers,
    VConferences,
    VContactAddresses,
    VContactAttachments,
    VContactEmails,
    VContactGroups,
    VContactNotes,
    VContactPhones,
    VContactRelations,
    VContactSettings,
    VContactTimes,
    VContactUrls,
    VContactUsers,
    VContacts,
    VCountries,
    VDashboard,
    VDashboardGroups,
    VDatabaseTransactions,
    VDatabases,
    VDefaultSettings,
    VDestinations,
    VDeviceKeys,
    VDeviceLines,
    VDeviceProfileKeys,
    VDeviceProfileSettings,
    VDeviceProfiles,
    VDeviceSettings,
    VDeviceVendorFunctionGroups,
    VDeviceVendorFunctions,
    VDeviceVendors,
    VDevices,
    VDialplanDetails,
    VDialplans,
    VDomainSettings,
    VDomains,
    VEmailQueue,
    VEmailQueueAttachments,
    VEmailTemplates,
    VEmergencyLogs,
    VEventGuardLogs,
    VExtensionSettings,
    VExtensionUsers,
    VExtensions,
    VFax,
    VFaxFiles,
    VFaxLogs,
    VFaxQueue,
    VFaxUsers,
    VFollowMe,
    VFollowMeDestinations,
    VGateways,
    VGroupPermissions,
    VGroups,
    VIvrMenuOptions,
    VIvrMenus,
    VLanguages,
    VMenuItemGroups,
    VMenuItems,
    VMenuLanguages,
    VMenus,
    VModules,
    VMusicOnHold,
    VNotifications,
    VNumberTranslationDetails,
    VNumberTranslations,
    VPermissions,
    VPhraseDetails,
    VPhrases,
    VPinNumbers,
    VRecordings,
    VRingGroupDestinations,
    VRingGroupUsers,
    VRingGroups,
    VSipProfileDomains,
    VSipProfileSettings,
    VSipProfiles,
    VSofiaGlobalSettings,
    VSoftware,
    VStreams,
    VUserGroups,
    VUserLogs,
    VUserSettings,
    VUsers,
    VVars,
    VVoicemailDestinations,
    VVoicemailGreetings,
    VVoicemailMessages,
    VVoicemailOptions,
    VVoicemails,
    VXmlCdr,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
