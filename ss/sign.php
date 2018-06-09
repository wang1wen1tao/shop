<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>漫画狗--你想要的所有</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/sign.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="js/yinghua.js"></script>
</head>
<body>
	<div class="box">
		<div class="cherry">
          <img id="yinghua" src="images/yinghua.png" alt="" >
      </div>

      <script>
    $(function(){
        $('.cherry').Cherry_Blossoms({
            is_Cherry:true,//是否生成樱花
            image_min:10,//花瓣最小宽度和高度
            image_max:50,//花瓣最大宽度和高度
            time_min:10000,//花瓣最快下坠时间
            time_max:20000,//花瓣最慢下坠时间
            interval:100//花瓣生成时间间隔
        })
    })
</script>
		<div class="top">

			<br>
			<p><img class="rect" src="images/toplogo.png"></p>
			<br>
			<br>
			<p><img src="images/img_title.png"></p>
			<hr color="white">
			<br>
			<br>
		</div>
		<div class="container container-small">
			<br>
			<br>
			<form action="" method="post">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="用户名/手机/邮箱">
				</div>
				<div class="form-group">
					<input type="password" class="form-control" placeholder="密码">
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary btn-block">登录</button>
				</div>
			</form>
			<div style="text-align:center"><h2 style="color:white;">没有账号?<a href="register.php">注册</a></h2></div>


		</div>
		<div class="bottom">
		<hr color:white>
		<p style="color:white">专注分享对世界的看法,和对acg文化的热爱</p>

		<hr color:white>
			<p style="color:gray">版权所属@Raymond Kenny,是我做的.</p>
		</div>
	</div>

</body>
</html>