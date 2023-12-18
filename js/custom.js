$(document).ready(function(){

	// 실제 스크립트 코드를 입력할 공간입니다.
	// 변수 ht에 브라우저의 높이값 저장
	let ht = $(window).height();
	$("section").height(ht);

	//  브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize", function() {
		let ht = $(window).height();
	$("section").height(ht);
	});
	// 마우스의 움직임에 반응하는 서브이미지
	$("section").on("mousemove", function(e) {
		// 변수 posX 마우스 커서의 x축 위치 저장
		let posX = e.pageX
		// 변수 posX 마우스 커서의 y축 위치 저장
		let posY = e.pageY

		/* 첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동 */
		$(".p11").css({bottom:20-(posY/30), right:20-(posX/30)});
		$(".p12").css({right:130+-(posX/20), bottom:-40+(posY/20)});
		$(".p13").css({right:60+(posX/20), top:180+(posY/20)});

		/*  이미지의 현재 위치 값에서 마우스 커서의 위치를 빼주면 이미지는 마우스가 움직일 때마다 반대방향으로 움직이고, 마우스 커서의 위치값을 더해주면 마우스가 움직이는 방향으로 움직임 */

		/*  posX와 posY를 나누는 수치가 커질수록 마우스의 움직임에 따른 서브 이미지의 움직임의 폭이 작아지고, 나누는 수치가 적을수록 서브 이미지의 움직임의 폭은 커짐 */
		/* 두번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동 */
		$(".p21").css({right:-180-(posX/30), bottom:-480-(posY/30)});
		$(".p22").css({right:130+(posX/50), bottom:-40+(posY/50)});
	
		/* 세번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동 */
		$(".p31").css({right:180-(posX/30), bottom:30-(posY/30)});
		$(".p32").css({right:110+(posX/20), bottom:-270+(posY/20)});
		$(".p33").css({right:-70+(posX/20), top:-130+(posY/20)});

		/* 네번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동 */
		$(".p41").css({right:20-(posX/30), bottom:-120-(posY/30)});
		$(".p42").css({right:0+(posX/20), bottom:-180+(posY/20)});
	});

	// 주메뉴 클릭시 자동으로 상하스크롤 시키기

	$("#menu li").on("click", function(e) {
		e.preventDefault();
		// 변수 ht에 브라우저 높이값 저장
		let ht = $(window).height();
			// 변수 i에 현재 클릭한 li의 순서값을 저장
		let i = $(this).index();
		// console.log(i);

		// 브라우저 높이값 * 박스의 순서 = 현재박스의 스크롤 위치값
		let nowTop = ht*i;
		console.log(nowTop);
		// 해당 스크롤의 위치 값으로 문서 이동
		$("html, body").stop().animate({
			scrollTop:nowTop
		},1400);
	});

	// scrollTop()
	//화면을 스크롤할 때에 현재 사용자가 스크롤한 만큼의 거리를 계산
	//	$(window).scrollTop();


	// $(window).on("scroll", function() {
	// 	let txt = $(this).scrollTop();
	// 	$(".scroll").text(txt);
	// })

	// 화면이 스크롤 될 때마다 현재 영역에 해당하는 메뉴 활성화하기

	$(window).on("scroll", function(){
		let ht = $(window).height()
		// 변수 scroll에 현재 문서가 스클로된 거리 저장
		// let scroll = $(window).scrollTop();

		// if(scroll>=ht*0 && scroll<ht*1){
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(0).addClass("on");
		// }
		// if(scroll>=ht*1 && scroll<ht*2){
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(1).addClass("on");
		// }
		
		// if(scroll>=ht*2 && scroll<ht*3){
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(2).addClass("on");
		// }
		
		// if(scroll>=ht*3 && scroll<ht*4){
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(3).addClass("on");
		// }
		for(let i=0; i<5; i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			}
		}
	});

		// 	$("선택자").on("mousewheel", function(event,delta){
		// 	if(delta>0){
		// 		// 마우스 휠을 올렸을 때 실행할 구문
		// 	} else if (delta<0){
		// 		// 마우스 휠을 내렸을 때 실행할 구문
		// 	}
		// })

		// $(".wheel").on("mousewheel", function(event,delta){
		// 	if(delta>0){
		// 		// 마우스 휠을 올렸을 때 실행할 구문
		// 		$(this).css({background:"red"});
		// 		$(".wheel p").text("마우스 휠을 올렸습니다.");
		// 	} else if (delta<0){
		// 		// 마우스 휠을 내렸을 때 실행할 구문
		// 		$(this).css({background:"blue"});
		// 		$(".wheel p").text("마우스 휠을 내렸습니다.");
		// 	}
		// })


		// 마우스휠의 움직임에 따라 화면 스크롤 시키기
		$("section").on("mousewheel", function(event,delta){
			if(delta>0){
				// 마우스 휠을 올렸을 때 실행할 구문
				let prev = $(this).prev().offset().top;
				console.log(prev);
				$("html,body").stop().animate({
					scrollTop:prev
				}, 1400, "easeOutBounce");
			} else if (delta<0){
				// 마우스 휠을 내렸을 때 실행할 구문
				let next = $(this).next().offset().top;
				console.log(next);
				$("html,body").stop().animate({
					scrollTop:next
				}, 1400, "easeOutBounce");
			}
		})


		// $("선택자").offset().top;
		// 해당선택자를 기준으로 문서 끝에서부터 선택자가 위치하고 있는 y축의 거리
		// let txt = $(".scroll").offset().top;
		// alert(txt);
});















