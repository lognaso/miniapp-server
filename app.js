var express = require('express')
var app = express()

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/', function (req, res) {
    res.send('hello world')
})

//https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg
app.get('/host/hostid/miniapps/', function (req, res) {
    res.send([{
        id: "js-miniapp-sample",
        displayName: "Mbbank",
        icon: "https://play-lh.googleusercontent.com/W0wkLA35w-pE87TXxmPU9vUyzB7X9Mg8_P_btzQrLQSFouuk_xWsZBGA0BM1Dz90hw=s360-rw",
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
            "https://raw.githubusercontent.com/lognaso/miniapp-server/main/publlic/js-miniapp-sample.zip"
        ]
        
    })
})

app.get('/host/:hostid/miniapp/:miniappid/version/:versionid/:testpath/manifest', function (req, res) {
    res.send({
        "manifest": [
            "https://raw.githubusercontent.com/lognaso/miniapp-server/main/publlic/js-miniapp-sample.zip"
        ]
        
    })
})
app.get('/host/:hostid/miniapp/:miniappid/version/:versionid//manifest', function (req, res) {
    res.send({
        "manifest": [
            "https://raw.githubusercontent.com/lognaso/miniapp-server/main/publlic/js-miniapp-sample.zip"
        ]
        
    })
})

app.get('/host/hostid/miniapp/:miniappid/version/:versionid/:testpath/metadata', function (req, res) {
    res.send({
      "bundleManifest": {
        "reqPermissions": [
            {
                "name": "rakuten.miniapp.user.USER_NAME",
                "reason": "Ứng dụng yêu cầu quyền truy cập user name"
            },
            {
                "name": "rakuten.miniapp.user.PROFILE_PHOTO",
                "reason": "Ứng dụng yêu cầu quyền truy cập profile photo"
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
            "provider": "MiniApp team",
            "description": "Ứng dụng demo mini app.",
            "fileSizeInMb": "2.3",
            "importantNotice": "Ứng dụng được   để xây dựng các MiniApp",
            "termsLink": "https://www.mbbank.com.vn",
            "privacyPolicyLink": "https://www.mbbank.com.vn"
        }}
    })
})


app.get('/host/hostid/miniapp/:miniappid/version/:versionid//metadata', function (req, res) {
    res.send({
      "bundleManifest": {
        "reqPermissions": [
            {
                "name": "rakuten.miniapp.user.USER_NAME",
                "reason": "Ứng dụng yêu cầu quyền truy cập user name"
            },
            {
                "name": "rakuten.miniapp.user.PROFILE_PHOTO",
                "reason": "Ứng dụng yêu cầu quyền truy cập profile photo"
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
            "provider": "MiniApp team",
            "description": "Ứng dụng demo mini app.",
            "fileSizeInMb": "2.3",
            "importantNotice": "Ứng dụng được   để xây dựng các MiniApp",
            "termsLink": "https://www.mbbank.com.vn",
            "privacyPolicyLink": "https://www.mbbank.com.vn"
        }}
    })
})

app.get('/host/hostid/miniapp/:miniappid/version/:versionid/metadata', function (req, res) {
    res.send({
      "bundleManifest": {
        "reqPermissions": [
            {
                "name": "rakuten.miniapp.user.USER_NAME",
                "reason": "Ứng dụng yêu cầu quyền truy cập user name"
            },
            {
                "name": "rakuten.miniapp.user.PROFILE_PHOTO",
                "reason": "Ứng dụng yêu cầu quyền truy cập profile photo"
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
            "provider": "MiniApp team",
            "description": "Ứng dụng demo mini app.",
            "fileSizeInMb": "2.3",
            "importantNotice": "Ứng dụng được   để xây dựng các MiniApp",
            "termsLink": "https://www.mbbank.com.vn",
            "privacyPolicyLink": "https://www.mbbank.com.vn"
        }}
    
    })
})
app.post('/uploadfile', function (req, res) {
    res.send('hello world');
})

app.use(express.static('public'))
app.listen(3000)
