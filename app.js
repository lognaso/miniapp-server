var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/host/hostid/miniapps/', function (req, res) {
    res.send([{
        id: "js-miniapp-sample",
        displayName: "js-miniapp-sample",
        icon: "https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg",
        version: {
            versionTag:"tag",
            versionId: "1.0"
        },
        promotionalImageUrl: "https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg",
        promotionalText: "test miniapp"
    }])
})


//https://438a-2402-9d80-248-80dc-b04e-5362-b70b-70a7.ngrok.io/host/hostid/miniapp/test-app/version/1.0/manifest?lang=vi

app.get('/host/:hostid/miniapp/:miniappid/version/:versionid/:testpath/manifest', function (req, res) {
    res.send({
        "manifest": [
            "https://cd40-2402-9d80-248-80dc-b04e-5362-b70b-70a7.ngrok.io/js-miniapp-sample.zip"
        ]
        
    })
})

app.get('/host/:hostid/miniapp/:miniappid/version/:versionid/:testpath/manifest', function (req, res) {
    res.send({
        "manifest": [
            "https://cd40-2402-9d80-248-80dc-b04e-5362-b70b-70a7.ngrok.io/js-miniapp-sample.zip"
        ]
        
    })
})
app.get('/host/:hostid/miniapp/:miniappid/version/:versionid//manifest', function (req, res) {
    res.send({
        "manifest": [
            "https://cd40-2402-9d80-248-80dc-b04e-5362-b70b-70a7.ngrok.io/js-miniapp-sample.zip"
        ]
        
    })
})

app.get('/host/hostid/miniapp/:miniappid/version/:versionid/:testpath/metadata', function (req, res) {
    res.send({
        "reqPermissions": [
            {
                "name": "rakuten.miniapp.user.USER_NAME",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.PROFILE_PHOTO",
                "reason": "Describe your reason here (optional)."
            }
        ],

        "optPermissions": [
            {
                "name": "rakuten.miniapp.user.CONTACT_LIST",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.device.LOCATION",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.ACCESS_TOKEN",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.action.SEND_MESSAGE",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.POINTS",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.device.FILE_DOWNLOAD",
                "reason": "Describe your reason here (optional)."
            }
        ],

        "accessTokenPermissions": [
            {
                "audience": "rae",
                "scopes": ["idinfo_read_openid", "memberinfo_read_point"]
            },
            {
                "audience": "api-c",
                "scopes": ["your_service_scope_here"]
            }
        ],

        "customMetaData": {
            "provider": "Rakuten Group Inc",
            "description": "This is a sample mini app.",
            "fileSizeInMb": "2.3",
            "importantNotice": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "termsLink": "https://www.example.com",
            "privacyPolicyLink": "https://www.example.com"
        }
    })
})


app.get('/host/hostid/miniapp/:miniappid/version/:versionid//metadata', function (req, res) {
    res.send({
        "reqPermissions": [
            {
                "name": "rakuten.miniapp.user.USER_NAME",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.PROFILE_PHOTO",
                "reason": "Describe your reason here (optional)."
            }
        ],

        "optPermissions": [
            {
                "name": "rakuten.miniapp.user.CONTACT_LIST",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.device.LOCATION",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.ACCESS_TOKEN",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.action.SEND_MESSAGE",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.POINTS",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.device.FILE_DOWNLOAD",
                "reason": "Describe your reason here (optional)."
            }
        ],

        "accessTokenPermissions": [
            {
                "audience": "rae",
                "scopes": ["idinfo_read_openid", "memberinfo_read_point"]
            },
            {
                "audience": "api-c",
                "scopes": ["your_service_scope_here"]
            }
        ],

        "customMetaData": {
            "provider": "Rakuten Group Inc",
            "description": "This is a sample mini app.",
            "fileSizeInMb": "2.3",
            "importantNotice": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "termsLink": "https://www.example.com",
            "privacyPolicyLink": "https://www.example.com"
        }
    })
})

app.get('/host/hostid/miniapp/:miniappid/version/:versionid/metadata', function (req, res) {
    res.send({
        "reqPermissions": [
            {
                "name": "rakuten.miniapp.user.USER_NAME",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.PROFILE_PHOTO",
                "reason": "Describe your reason here (optional)."
            }
        ],

        "optPermissions": [
            {
                "name": "rakuten.miniapp.user.CONTACT_LIST",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.device.LOCATION",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.ACCESS_TOKEN",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.action.SEND_MESSAGE",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.user.POINTS",
                "reason": "Describe your reason here (optional)."
            },
            {
                "name": "rakuten.miniapp.device.FILE_DOWNLOAD",
                "reason": "Describe your reason here (optional)."
            }
        ],

        "accessTokenPermissions": [
            {
                "audience": "rae",
                "scopes": ["idinfo_read_openid", "memberinfo_read_point"]
            },
            {
                "audience": "api-c",
                "scopes": ["your_service_scope_here"]
            }
        ],

        "customMetaData": {
            "provider": "Rakuten Group Inc",
            "description": "This is a sample mini app.",
            "fileSizeInMb": "2.3",
            "importantNotice": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "termsLink": "https://www.example.com",
            "privacyPolicyLink": "https://www.example.com"
        }
    
    })
})
app.post('/uploadfile', function (req, res) {
    res.send('hello world');
})

app.use(express.static('public'))
app.listen(3000)