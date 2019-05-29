//屏幕适配函数
      (function (doc, win) {
        var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return;
            		// 640 为设计稿的宽度，以实际情况修改
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px'
          }
        if (!doc.addEventListener) return
        recalc()
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
      })(document, window)
              
$('#BTNSHARE').on('click', function() {
		TGDialogS('test2');
	})
	$('#BTNSHARE').on('click', function() {
		$('#test1').hide();
	})
     //登陆
        function login() {
            parent.need("biz.login", function (LoginManager) {
                LoginManager.login();
            });

        };
        function logout() {
            parent.need("biz.login", function (LoginManager) {
                LoginManager.logout();
            });
        };
        LoginManager.checkLogin(function () {
            if ($E("#login_nickname_span")) {
                LoginManager.getNickName(function (loginInfo) {
                    if (loginInfo.isLogin) {
                        $E("#login_nickname_span").innerHTML = loginInfo.nickName;
                    }
                });
            }

        }); 
function TGDialogS(e){
            // 利用milo库引入dialog组件
            need("biz.dialog",function(Dialog){
                Dialog.show({
                    id:e,
                    bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
                    opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
                });
            });
        }
        function closeDialog(){
            // 利用milo库引入dialog组件
            need("biz.dialog",function(Dialog){
                Dialog.hide();
            });
        }
