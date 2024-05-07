		
		const screens = [Id("screen-play"), Id("screen-welcome"), Id("screen-choose-hero"), Id("screen-hero-aleatory"), Id("screen-game"), Id("screen-end-game")];
		
		// TELA PLAY
		const button_play = Id("button-play");
		
		// TELA APRESENTAÇÃO
		const div_form_welcome = Id("div-form-welcome");
		const form_nome_heroi = Id("form-nome-heroi");
		const input_nome_heroi = Id("input-nome-heroi-user");
		const input_submit_nome_heroi = Id("input-submit-nome-heroi-user");
		const div_user_welcome = Id("div-user-welcome");
		const p_text_welcome = Id("p-user-welcome-existent");
		const sub_identificacion = Id("sub-identificacion");
		const progress_bar_screen_user_welcome = Id("progress-bar-screen-user-welcome");
		
		let get_nome_heroi;
		
		// TELA ESCOLHA DO HEROI
		const div_organiza_menu_choose_hero = Id("div-organiza-menu-choose-hero");
		const div_text_organize_menu_choose = Id("div-text-organiza-menu-choose");
		const text_organize_menu_choose = div_text_organize_menu_choose.querySelectorAll("p");
		const button_start_game = Id("button-start-game");
		const button_hero_aleatory = Id("button-hero-aleatory");
		const button_know_hero = Id("button-know-hero");
		
		//TABELA HEROIS
		const div_table_hero = Id("div-table-hero");
		const card_hero_know = Id("card-hero-know");
		const card_hero_know_select_node = document.querySelectorAll("#card-hero-know > p");
		const div_table_heros_know = Id("div-table-heros-know");
		const table_heros_know__select_buttons = div_table_heros_know.querySelectorAll("button");
		const table_heros_know__select_imgs = div_table_heros_know.querySelectorAll("img");
		const table_heros_know__select_figcaption = div_table_heros_know.querySelectorAll("figcaption");
		const button_back_menu = Id("button-back-menu");
		
		class Hero {
			
			constructor(nome, titulo, nivel, character, experiencia, imgidle, descreeverimg)
			{
				this.name = nome;
				this.nivel = titulo;
				this.level = nivel;
				this.caracteristicas = character;
				this.xp = experiencia;
				this.idle = imgidle;
				this.alt = descreeverimg;
			}
			
		};
		
		const table_heros = [
			new Hero("Joco","Herói Ferro","Nível 1","O novato tem muito a crescer","0xp a 1000xp","src/screen-choose-hero/img/personagens/ferro/idle.png","Cavaleiro com calça de couro e armadura peitoral e chapéu de ferro"),
			new Hero("Drake","Herói Bronze","Nível 2","Aprendiz de herói","1001xp a 2000xp","src/screen-choose-hero/img/personagens/bronze/idle.png","Cavaleiro com roupa de couro, uma ombreira de ferro e sem capacete"),
			new Hero("Urd","Herói Prata","Nível 3","Já cresceu bastante, aspirante a estagiário","2001xp a 5000xp","src/screen-choose-hero/img/personagens/prata/idle.png","Cavaleiro clássico com armadura de prata"),
			new Hero("Thyri","Herói Ouro","Nível 4","Um herói que está começando o estágio","5001xp a 7000xp","src/screen-choose-hero/img/personagens/ouro/idle.png","Cavaleiro com roupa estilo ninja na cor roxa"),
			new Hero("Stac","Herói Platina","Nível 5","Finalista do estágio","7001xp a 8000xp","src/screen-choose-hero/img/personagens/platina/idle.png","Cavaleiro com roupa estilo mago com capuz na cor cinza, com cinto vermelho"),
			new Hero("Meg","Herói Ascendente","Nível 6","Um herói júnior na área","8001xp a 9000xp","src/screen-choose-hero/img/personagens/ascendente/idle.png","Cavaleiro com roupa estilo karatê de cor azul-claro quase branco com faixa e, cinto amarelos"),
			new Hero("Cadman","Herói Imortal","Nível 7","Um herói pleno em todos os sentidos","9001xp a 10.000xp","src/screen-choose-hero/img/personagens/imortal/idle.png","Cavaleiro com roupa estilo herói, camisa e capa brancas, e luvas, sapato e calça azuis"),
			new Hero("Milo","Herói Radiante","Nível 8","Poucos chegam ao nível Sênior","acima de 10.001xp","src/screen-choose-hero/img/personagens/radiante/idle.png","Cavaleiro com roupa vermelha, roupão com capuz azul por cima, e mascara que cobre somente a boca"),
		];
		
		//TELA HEROI ALEATORIO
		const div_text_screen_aleatory = Id("div-text-screen-aleatory");
		const div_select_p_screen_aleatory = div_text_screen_aleatory.querySelectorAll("p");
		const div_img_screen_aleatory = Id("div-img-screen-aleatory");
		const div_select_img_screen_aleatory = div_img_screen_aleatory.querySelectorAll("img");
		const div_buttons_screen_aleatory = Id("div-buttons-screen-aleatory");
		const div_select_buttons_screen_aleatory = div_buttons_screen_aleatory.querySelectorAll("button");
		
		/// zerar e juntar
		let hero, quantidade_xp;
		
		//TELA JOGO
		const organize_div_text_screen_game = Id("organize-div-text-screen-game");
		const organize_div_select_p_screen_game = organize_div_text_screen_game.querySelectorAll("p");
		const organize_div_select_sub_screen_game = organize_div_text_screen_game.querySelectorAll("sub");
		const organize_div_select_progress_screen_game = organize_div_text_screen_game.querySelectorAll("progress");
		const button_som = Id("button-som");
		const div_observar_e_repete = Id("div-observar-e-repete");
		const tela_projetion_directions = Id("tela-projetion-directions");
		const tela_projetion_directions_select_span = tela_projetion_directions.querySelectorAll("span");
		const div_mostrar_resposta = Id("div-mostrar-resposta");
		const div_power_up_down = Id("div-power-up-down");
		const div_power_up_down_select_button = div_power_up_down.querySelectorAll("button");
		const div_power_up_down_select_sub = div_power_up_down.querySelectorAll("sub");
		const div_img_hero_screen_game = Id("div-img-hero-screen-game");
		const div_img_hero_screen_game_select_img = div_img_hero_screen_game.querySelectorAll("img");
		const div_buttons_directions = Id("div-buttons-directions");
		const div_buttons_directions_select_buttons = div_buttons_directions.querySelectorAll("button");
		const div_button_sair_screen_game = Id("div-button-sair-screen-game");
		const div_button_sair_screen_game_select_buttons = div_button_sair_screen_game.querySelectorAll("button");
		
		
		let som_ligado = true;
		
		const som_contagem_regressiva = new Audio("src/screen-game/sound/short-beep-countdown-81121.mp3");
		
		const som_diretion_left = new Audio("src/screen-game/sound/notification-sound-7062.mp3");
		const som_diretion_up = new Audio("src/screen-game/sound/select_denied_04-96602.mp3");
		const som_diretion_right = new Audio("src/screen-game/sound/playernocanselect-37979.mp3");
		const som_diretion_down = new Audio("src/screen-game/sound/short-beep-tone-47916.mp3");
		
		const som_escolhar_correta = new Audio("src/screen-game/sound/scale-e6-14577.mp3");
		const som_escolhar_errada = new Audio("src/screen-game/sound/negative_beeps-6008.mp3");
		
		const som_sorteio_power = new Audio("src/screen-game/sound/toss-aside-88750.mp3");
		const som_presente = new Audio("src/screen-game/sound/clapping-slight-echo-102675.mp3");
		const som_mico = new Audio("src/screen-game/sound/monkey-scream-6407.mp3");
		
		const som_fase_concluida_com_sucesso = new Audio("src/screen-game/sound/success-48018.mp3");
		
		let start_game,power_or_not;
		let end_round = false;
		let bonus_liberated = false; 
		let array_directions = ["⬅️","⬆️","➡️","⬇️"];
		let array_sequencia = ["️","","️","️"];
		let array_sequencia_user = ["","","️","️"];
		
		
		
		//TELA FINAL
		const organize_div_fim_aventura = Id("organize-div-fim-aventura");
		const organize_div_fim_aventura_select_p = organize_div_fim_aventura.querySelectorAll("p");
		const organize_div_fim_aventura_select_img = organize_div_fim_aventura.querySelectorAll("img");
		const button_menu_inicial_end_game = Id("button-menu-inicial-end-game");
		
		let sair_ativa = false;
		
		
		/*                                                                                                                                        */
		///Tela Play
		
		//Evento para carregar janela de identificação ou a de boas-vindas
		button_play.addEventListener("click", ()=>{
			
			
			screens[0].classList.add("display-none");
			screens[1].classList.remove("display-none");
			
			
			if (sessionStorage.getItem("name_hero"))
			{
				
				get_nome_heroi = sessionStorage.getItem("name_hero");
				
				div_form_welcome.classList.add("display-none");
				div_user_welcome.classList.remove("display-none");
				
				p_text_welcome.innerText = "Olá, seja bem-vindo, " + get_nome_heroi;
				
				Carregar_Barra_Welcome(true);
				
			}
			else
			{
				
				div_form_welcome.classList.remove("display-none");
				div_user_welcome.classList.add("display-none");
				
			}
			
		});
		
		
		/*                                                                                                                                        */
		
		
		/*                                                                                                                                        */
		///Tela de Boas-Vindas e Identificação
		
		//Formulário de Identificação
		form_nome_heroi.addEventListener("submit", (e)=>{
			
			e.preventDefault();
			get_nome_heroi = input_nome_heroi.value;
			sessionStorage.setItem("name_hero", get_nome_heroi);
			
			if (sessionStorage.getItem("name_hero"))
			{
				
				get_nome_heroi = sessionStorage.getItem("name_hero");
				
				div_form_welcome.classList.add("display-none");
				div_user_welcome.classList.remove("display-none");
				
				p_text_welcome.innerText = "Olá, seja bem-vindo, " + get_nome_heroi;
				
				Carregar_Barra_Welcome(true);
				
			}
			
		});
		
		
		//Voltar para formulário
		sub_identificacion.addEventListener("click", ()=>{
			
			div_form_welcome.classList.remove("display-none");
			div_user_welcome.classList.add("display-none");
			
			Carregar_Barra_Welcome(false);
			
		});
		
		//Voltar para formulário com teclado
		sub_identificacion.addEventListener("focus", ()=>{
			
			window.addEventListener("keydown", (t) => {
				
				let tcl = t.keyCode;
				
				//tecla entre
				if (tcl == 13)
				{
						
						div_form_welcome.classList.remove("display-none");
						div_user_welcome.classList.add("display-none");
						
						Carregar_Barra_Welcome(false);
						
				}
			});
			
		});
		//Função para Carregar Barra de Progresso para dar tempo de usuário trocar de nome e carregar tela de menu
		
		let barra;
		let progresso;
		
		function Carregar_Barra_Welcome(controle) {
			
				//Se true carregar barra de progresso e trocar tela de menu
				//Se false abortar carregamento
				if (controle === true )
				{
					
					barra = 0;
					
					progresso = setInterval(()=>{
						
						if (barra == 100)
						{
							
							clearInterval(progresso);
							screens[1].classList.add("display-none");
							screens[2].classList.remove("display-none");
							text_organize_menu_choose[0].innerText = "Olá, " + get_nome_heroi;
							
						}
						else
						{
							
							++barra;
							progress_bar_screen_user_welcome.value = barra;
							
						}
					
					}, 30);
					
				}
				else
				{
					
					clearInterval(progresso);
					
				}
				
			
			
		};
		
		/*                                                                                                                                        */
		
		
		/*                                                                                                                                        */
		///Tela de Menu
		
		//Evento para iniciar jogo, trocar para tela jogo
		button_start_game.addEventListener("click", () => {
			
			hero = table_heros[0];
			quantidade_xp = 0;
			
			screens[2].classList.add("display-none");
			screens[4].classList.remove("display-none");
			
			Fill_Information_Screen_Game_Start(1000);
			
			
		});
		
		//Evento para escolher herói aleatório, abrir tela de heroí aleatório e carregar informações de arcodo com o sorteio
		button_hero_aleatory.addEventListener("click", ()  => {
			
			screens[2].classList.add("display-none");
			screens[3].classList.remove("display-none");
			
			hero = Aleatory_Item_Array(table_heros);
			
			let quanto_xp_next_level;
			
			
			switch (hero.name)
			{
				case "Joco":
					quantidade_xp = Aleatory_Number_Interval(0,1000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 1001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Drake":
					quantidade_xp = Aleatory_Number_Interval(1001,2000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 2001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Urd":
					quantidade_xp = Aleatory_Number_Interval(2001,5000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 5001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Thyri":
					quantidade_xp = Aleatory_Number_Interval(5001,7000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 7001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Stac":
					quantidade_xp = Aleatory_Number_Interval(7001,8000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 8001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Meg":
					quantidade_xp = Aleatory_Number_Interval(8001,9000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 9001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Cadman":
					quantidade_xp = Aleatory_Number_Interval(9001,10000);
					quanto_xp_next_level = "Faltam " + Math.abs((quantidade_xp - 10001)) + " Pontos Para o Próximo Nível";
					break;
					
				case "Milo":
					quantidade_xp = Aleatory_Number_Interval(10001,15000);
					quanto_xp_next_level = "Parabéns, você está no último nível. É isso ai! 😎";
					break;
					
				default:
				quantidade_xp = "Algo deu errado!";
				quanto_xp_next_level = "";
				console.log("Não deu! 😆");
			};
			
			
			div_select_p_screen_aleatory[0].innerText = "Parabéns " + get_nome_heroi;
			div_select_p_screen_aleatory[1].innerText = "Você Ganhou um " + hero.nivel;
			div_select_p_screen_aleatory[2].innerText = hero.level;
			div_select_p_screen_aleatory[3].innerText = "Você Tem " + quantidade_xp + " Pontos de XP";
			div_select_p_screen_aleatory[4].innerText = quanto_xp_next_level;
			div_select_img_screen_aleatory[0].src = hero.idle;
			div_select_img_screen_aleatory[0].title = hero.name;
			
		});
		
		//Evento para abrir tela para obter mais informações sobre os heróis, e chamar funções de preencher card e button
		button_know_hero.addEventListener("click", ()  => {
			
			screens[2].style.justifyContent = "center";
			div_organiza_menu_choose_hero.classList.add ("display-none");
			div_table_hero.classList.remove ("display-none");
			
			//Preencher Buttons
			for (let x = 0; x < table_heros_know__select_buttons.length; x++)
			{
				Fill_Button_Know(x);
			}
			
			//Evento nos Buttons de Preencher o Card
			for (let b = 0; b < table_heros_know__select_buttons.length; b++)
			{
				table_heros_know__select_buttons[b].addEventListener("click", ()=>{ Fill_Card_Know(b)});
			}
			
		});
		
		
		
		/// --- Sub-tela de Informações sobre os Herós
		//Evento de voltar para a tela de menu
		button_back_menu.addEventListener("click", ()  => {
			
			screens[2].style.justifyContent = "flex-end";
			div_organiza_menu_choose_hero.classList.remove ("display-none");
			div_table_hero.classList.add ("display-none");
			
		});
		
		
		//Função para Preencher o Card de informações sobre o herói selecionado
		function Fill_Card_Know (num)
		{
			
			if (card_hero_know.classList.contains("display-none"))
			{
				
				card_hero_know.classList.remove("display-none");
				
			}
			
			card_hero_know_select_node[0].innerText = table_heros[num].name;
			card_hero_know_select_node[1].innerText = table_heros[num].nivel;
			card_hero_know_select_node[2].innerText = table_heros[num].level;
			card_hero_know_select_node[3].innerText = table_heros[num].caracteristicas;
			card_hero_know_select_node[4].innerText = table_heros[num].xp;
			
		}
		
		//Função para Preencher os Buttons na tela de informações com os heróis disponiveis
		function Fill_Button_Know (num)
		{
			
			table_heros_know__select_buttons[num].title = table_heros[num].name + " - " + table_heros[num].level;
			table_heros_know__select_imgs[num].src = table_heros[num].idle;
			table_heros_know__select_imgs[num].alt = table_heros[num].alt;
			table_heros_know__select_figcaption[num].innerText = table_heros[num].nivel;
			
		}
		
		//Preencher Informações ao Iniciar Tela de Jogo
		function Fill_Information_Screen_Game_Start (xp_maximo)
		{
			
			organize_div_select_p_screen_game[0].innerText = "❤️❤️❤️";
			organize_div_select_p_screen_game[1].innerText = hero.level;
			organize_div_select_progress_screen_game[0].value = quantidade_xp;
			organize_div_select_progress_screen_game[0].max = xp_maximo;
			organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
			
			div_observar_e_repete.innerText = "  ";
			
			tela_projetion_directions.style.backgroundColor = "transparent";
			
			tela_projetion_directions_select_span[0].innerText  = "  ";
			tela_projetion_directions_select_span[1].innerText  = "  ";
			tela_projetion_directions_select_span[2].innerText  = "  ";
			tela_projetion_directions_select_span[3].innerText  = "  ";
			div_mostrar_resposta.innerText  = "  ";
			
			div_power_up_down_select_button[0].innerText = "▶️";
			
			div_img_hero_screen_game_select_img[0].src = hero.idle;
			
			start_game = true;
			sair_ativa = false;
		}
		
		/*                                                                                                                                        */
		
		
		/*                                                                                                                                        */
		///Tela de Herói Aleatório
		
		//Evento para ir para a tela de jogo com um herói escolhido aleatoriamente
		div_select_buttons_screen_aleatory[0].addEventListener("click", () => {
			
			screens[3].classList.add("display-none");
			screens[4].classList.remove("display-none");
			
			switch (hero.name)
			{
				case "Joco":
					Fill_Information_Screen_Game_Start (1001);
					break;
					
				case "Drake":
					Fill_Information_Screen_Game_Start (2001);
					break;
					
				case "Urd":
					Fill_Information_Screen_Game_Start (5001);
					break;
					
				case "Thyri":
					Fill_Information_Screen_Game_Start (7001);
					break;
					
				case "Stac":
					Fill_Information_Screen_Game_Start (8001);
					break;
					
				case "Meg":
					Fill_Information_Screen_Game_Start (9001);
					break;
					
				case "Cadman":
					Fill_Information_Screen_Game_Start (10001);
					break;
					
				case "Milo":
					Fill_Information_Screen_Game_Start (10001);
					break;
					
				default:
				Fill_Information_Screen_Game_Start (1001);
			}
			
		});
		
		//Evento para ir para a tela de finalização do jogo (saída, última tela, game over ☠️)
		div_select_buttons_screen_aleatory[1].addEventListener("click", () => {
			
			screens[3].classList.add("display-none");
			screens[5].classList.remove("display-none");
			
			Fill_Screen_End_Game ();
		});
		
		
		/*                                                                                                                                        */
		
		
		/*                                                                                                                                        */
		///Tela de Jogo
		
		//Evento para deixar jogo sem som
		button_som.addEventListener("click", () => {
			
			if (som_ligado)
			{
				
				som_ligado = false;
				
				button_som.innerText = "🔇";
				button_som.title = "Som Desligado";
				
			}
			else
			{
				
				som_ligado = true;
				
				button_som.innerText = "🔊";
				button_som.title = "Som Ligado";
				
			}
			
		});
		
		//Eventos para quem jogar com o mouse ou tela de toque
		div_power_up_down_select_button[0].addEventListener("click", () => {
			
			if (div_power_up_down_select_button[0].innerText === "▶️")
			{
				
				Start_Round();
				
				Verificy_Hero_Diretion_Img("idle");
			}
			
			if (power_or_not === true)
			{
				
				Get_Power_Up_Down();
				
			}
			else if (power_or_not === false)
			{
				
				Get_Power_Up_Down();
				
			}
			
			
			
		});
		
		//esquerda
		div_buttons_directions_select_buttons[0].addEventListener("click", () => {  
			
			
			Verificy_Sequence_User_Round("left",0,som_diretion_left);
			
		});
		
		//cima
		div_buttons_directions_select_buttons[1].addEventListener("click", () => {  
			
			Verificy_Sequence_User_Round("up",1,som_diretion_up);
			
		});
		
		//direita
		div_buttons_directions_select_buttons[2].addEventListener("click", () => {  
			
			Verificy_Sequence_User_Round("right",2,som_diretion_right);
			
		});
		
		//baixo
		div_buttons_directions_select_buttons[3].addEventListener("click", () => {  
			
			Verificy_Sequence_User_Round("down",3,som_diretion_down);
			
		});
		
		//Eventos para quem jogar com o teclado
		window.addEventListener("keydown", (t) => {
			
			let tcl = t.keyCode;
			
			//tecla m - ligar ou desligar som
			if (tcl == 77)
			{
				
				if (som_ligado)
				{
					
					som_ligado = false;
					
					button_som.innerText = "🔇";
					button_som.title = "Som Desligado";
					
				}
				else
				{
					
					som_ligado = true;
					
					button_som.innerText = "🔊";
					button_som.title = "Som Ligado";
					
				}
				
				
			}
			
			//tecla de espaço/space - evento de perda ou ganhou
			if (tcl == 32)
			{
				
				if (div_power_up_down_select_button[0].innerText === "▶️")
				{
					
					Start_Round();
					
					Verificy_Hero_Diretion_Img("idle");
				}
				
				if (power_or_not === true)
				{
					
					Get_Power_Up_Down();
					
				}
				else if (power_or_not === false)
				{
					
					Get_Power_Up_Down();
					
				}
				
				
			}
			
			//seta para a esquerda/left
			if (tcl == 37)
			{
				
				Verificy_Sequence_User_Round("left",0,som_diretion_left);
				
			}
			
			//seta para a cima/up
			if (tcl == 38)
			{
				
				Verificy_Sequence_User_Round("up",1,som_diretion_up);
				
			}
			
			//seta para a direita/right
			if (tcl == 39)
			{
				
				Verificy_Sequence_User_Round("right",2,som_diretion_right);
				
			}
			
			//seta para a baixo/down
			if (tcl == 40)
			{
				
				Verificy_Sequence_User_Round("down",3,som_diretion_down);
				
			}
			
		});
		
		//Função para verificar que heroi está no momento e escolher a imagem correta
		function Verificy_Hero_Diretion_Img (direction)
		{
			
			if (direction === "left")
			{
				switch (hero.name)
					{
						case "Joco":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-left.gif";
							break;
							
						case "Drake":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/bronze/bronze-left.gif";
							break;
							
						case "Urd":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/prata/prata-left.gif";
							break;
							
						case "Thyri":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ouro/ouro-left.gif";
							break;
							
						case "Stac":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/platina/platina-left.gif";
							break;
							
						case "Meg":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ascendente/ascedente-left.gif";
							break;
							
						case "Cadman":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/imortal/imortal-left.gif";
							break;
							
						case "Milo":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/radiante/radiante-left.gif";
							break;
							
						default:
						div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-left.gif";
					}
			}
			
			if (direction === "right")
			{
				switch (hero.name)
					{
						case "Joco":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-right.gif";
							break;
							
						case "Drake":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/bronze/bronze-right.gif";
							break;
							
						case "Urd":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/prata/prata-right.gif";
							break;
							
						case "Thyri":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ouro/ouro-right.gif";
							break;
							
						case "Stac":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/platina/platina-right.gif";
							break;
							
						case "Meg":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ascendente/ascedente-right.gif";
							break;
							
						case "Cadman":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/imortal/imortal-right.gif";
							break;
							
						case "Milo":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/radiante/radiante-right.gif";
							break;
							
						default:
						div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-right.gif";
					}
			}
			
			if (direction === "up")
			{
				switch (hero.name)
					{
						case "Joco":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-up.gif";
							break;
							
						case "Drake":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/bronze/bronze-up.gif";
							break;
							
						case "Urd":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/prata/prata-up.gif";
							break;
							
						case "Thyri":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ouro/ouro-up.gif";
							break;
							
						case "Stac":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/platina/platina-up.gif";
							break;
							
						case "Meg":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ascendente/ascedente-up.gif";
							break;
							
						case "Cadman":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/imortal/imortal-up.gif";
							break;
							
						case "Milo":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/radiante/radiante-up.gif";
							break;
							
						default:
						div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-up.gif";
					}
			}
			
			if (direction === "down")
			{
				switch (hero.name)
					{
						case "Joco":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-down.gif";
							break;
							
						case "Drake":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/bronze/bronze-down.gif";
							break;
							
						case "Urd":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/prata/prata-down.gif";
							break;
							
						case "Thyri":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ouro/ouro-down.gif";
							break;
							
						case "Stac":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/platina/platina-down.gif";
							break;
							
						case "Meg":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ascendente/ascedente-down.gif";
							break;
							
						case "Cadman":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/imortal/imortal-down.gif";
							break;
							
						case "Milo":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/radiante/radiante-down.gif";
							break;
							
						default:
						div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/ferro-down.gif";
					}
			}
			
			if (direction === "idle")
			{
				switch (hero.name)
					{
						case "Joco":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/idle.png";
							break;
							
						case "Drake":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/bronze/idle.png";
							break;
							
						case "Urd":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/prata/idle.png";
							break;
							
						case "Thyri":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ouro/idle.png";
							break;
							
						case "Stac":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/platina/idle.png";
							break;
							
						case "Meg":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ascendente/idle.png";
							break;
							
						case "Cadman":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/imortal/idle.png";
							break;
							
						case "Milo":
							div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/radiante/idle.png";
							break;
							
						default:
						div_img_hero_screen_game_select_img[0].src = "src/screen-game/img/ferro/idle.png";
					}
			}
			
		}
		
		//Função para começar turno embralhar a sequência e jogar na tela de projeção
		function Start_Round ()
		{
			
			if ((start_game) && (sair_ativa === false))
			{
				
				start_game = false;
				
				if (div_power_up_down_select_button[0].innerText === "▶️")
				{
					
					div_power_up_down_select_button[0].innerText = "❓";
					
				}
				
				div_power_up_down_select_sub [0].innerText = "";
				
				div_mostrar_resposta.innerText = " ";
				
				for (let s = 0; s < tela_projetion_directions_select_span.length; s++)
				{
					
					tela_projetion_directions_select_span[s].innerText = "";
					
				}
				
				setTimeout(()=>{
					
					tela_projetion_directions.style.backgroundColor = "#ea0b0b";
					div_observar_e_repete.innerText = "Observe a sequência a seguir e repita ao fim dela de maneira exata:";
					
					if(som_ligado)
					{
						som_contagem_regressiva.play();
					}
					
					setTimeout(() => {
						
						tela_projetion_directions.style.backgroundColor = "#eabd0b";
						
						setTimeout(() => {
							
							tela_projetion_directions.style.backgroundColor = "#92ea0b";
							
								setTimeout(() => {
									
									
									
									for (let d = 0; d < tela_projetion_directions_select_span.length; d++)
									{
										
										Shuffle_Array(array_directions);
										array_sequencia[d] = array_directions[d];
										
									}
									
									for (let t = 0; t < tela_projetion_directions_select_span.length; t++) {
										
										if (sair_ativa)
										{
											
											break;
											
										}
										
										setTimeout(() => {
											tela_projetion_directions_select_span[t].innerText = array_sequencia[t];
											
											
											if(som_ligado)
											{
												switch (array_sequencia[t])
												{
													case "⬅️":
														som_diretion_left.play();
														Verificy_Hero_Diretion_Img("left");
														break;
													case "⬆️":
														som_diretion_up.play();
														Verificy_Hero_Diretion_Img("up");
														break;
													case "➡️":
														som_diretion_right.play();
														Verificy_Hero_Diretion_Img("right");
														break;
													case "⬇️":
														som_diretion_down.play();
														Verificy_Hero_Diretion_Img("down");
														break;
													
													default:
													Verificy_Hero_Diretion_Img("idle");
												}
											}
											else
											{
												switch (array_sequencia[t])
												{
													case "⬅️":
														
														Verificy_Hero_Diretion_Img("left");
														break;
													case "⬆️":
														
														Verificy_Hero_Diretion_Img("up");
														break;
													case "➡️":
														
														Verificy_Hero_Diretion_Img("right");
														break;
													case "⬇️":
														
														Verificy_Hero_Diretion_Img("down");
														break;
													
													default:
													Verificy_Hero_Diretion_Img("idle");
												}
											}
											
											if (t === tela_projetion_directions_select_span.length - 1)
											{
												setTimeout(() => {
													
													Verificy_Hero_Diretion_Img("idle");
													
													setTimeout(() => {
														
														for (let s = 0; s < tela_projetion_directions_select_span.length; s++) {
															
															tela_projetion_directions_select_span[s].innerText = "";
															
														}
														
														if (sair_ativa)
														{
															
															div_observar_e_repete.innerText = "";
															tela_projetion_directions.style.backgroundColor = "transparent";
															
														}
														else
														{
															
															div_observar_e_repete.innerText = "Sua vez";
															tela_projetion_directions.style.backgroundColor = "#eeeeee";
															
														}
														
														end_round = true;
														
														
													}, 1500);
													
												}, 1000);
											}
											
										}, t * 2000);
									}
									
									
								}, 1450);
						
						}, 1200);
						
					}, 1000);
					
				}, 400);
				
			}
			
		}
		
		// Função para verificar se sequência do usuário está correta
		function Verificy_Sequence_User_Round (img,btn,som)
		{
			
			if ((end_round) && (sair_ativa === false))
			{
				
				Verificy_Hero_Diretion_Img(img);
				
				if(som_ligado)
				{
					
					som.play();
					
				}
				
				
				if (tela_projetion_directions_select_span[0].innerText == "")
				{
					
					tela_projetion_directions_select_span[0].innerText = div_buttons_directions_select_buttons[btn].value;
					
					if (array_sequencia[0] === tela_projetion_directions_select_span[0].innerText)
					{
						
						setTimeout (()=>{
							
							if (som_ligado)
							{
								
								som_escolhar_correta.play();
								
							}
							
						}, 900)
						
						tela_projetion_directions.style.backgroundColor = "#4aff55";
						
						
						setTimeout (()=>{
							
							tela_projetion_directions.style.backgroundColor = "#eeeeee";
							
						}, 800)
						
						
					}
					else
					{
						
						
						if (som_ligado)
						{
							
							som_escolhar_errada.play();
							
						}
						
						div_observar_e_repete.innerText = "Que Pena! Você errou";
						tela_projetion_directions.style.backgroundColor = "#ff0030";
						
						end_round = false;
						
						for (let a = 0; a < array_sequencia.length; a++)
						{
							
							div_mostrar_resposta.innerText += " " + array_sequencia[a] + " ";
							
						}
						
						
						Situation_Life ();
						
						
					}
					
					setTimeout(() => {
						
						div_img_hero_screen_game_select_img[0].src = hero.idle;
						
					}, 1000);
					
				}
				else if (tela_projetion_directions_select_span[1].innerText == "")
				{
					
					tela_projetion_directions_select_span[1].innerText = div_buttons_directions_select_buttons[btn].value;
					
					if (array_sequencia[1] === tela_projetion_directions_select_span[1].innerText)
					{
						
						
						setTimeout (()=>{
							
							if (som_ligado)
							{
								
								som_escolhar_correta.play();
								
							}
							
						}, 900)
						
						tela_projetion_directions.style.backgroundColor = "#4aff55";
						
						setTimeout (()=>{
							
							tela_projetion_directions.style.backgroundColor = "#eeeeee";
							
						}, 800)
						
						
					}
					else
					{
						
						
						if (som_ligado)
						{
							
							som_escolhar_errada.play();
							
						}
						
						div_observar_e_repete.innerText = "Que Pena! Você errou";
						tela_projetion_directions.style.backgroundColor = "#ff0030";
						
						end_round = false;
						
						for (let a = 0; a < array_sequencia.length; a++)
						{
							
							div_mostrar_resposta.innerText += " " + array_sequencia[a] + " ";
							
						}
						
						
						Situation_Life ();
						
					}
					
					
					setTimeout(() => {
						
						div_img_hero_screen_game_select_img[0].src = hero.idle;
						
					}, 1000);
					
				}
				else if (tela_projetion_directions_select_span[2].innerText == "")
				{
					
					tela_projetion_directions_select_span[2].innerText = div_buttons_directions_select_buttons[btn].value;
					
					if (array_sequencia[2] === tela_projetion_directions_select_span[2].innerText)
					{
						
						
						setTimeout (()=>{
							
							if (som_ligado)
							{
								
								som_escolhar_correta.play();
								
							}
							
						}, 900)
						
						tela_projetion_directions.style.backgroundColor = "#4aff55";
						
						setTimeout (()=>{
							
							tela_projetion_directions.style.backgroundColor = "#eeeeee";
							
						}, 800)
						
						
					}
					else
					{
						
						
						if (som_ligado)
						{
							
							som_escolhar_errada.play();
							
						}
						
						div_observar_e_repete.innerText = "Que Pena! Você errou";
						tela_projetion_directions.style.backgroundColor = "#ff0030";
						
						end_round = false;
						
						for (let a = 0; a < array_sequencia.length; a++)
						{
							
							div_mostrar_resposta.innerText += " " + array_sequencia[a] + " ";
							
						}
						
						
						Situation_Life ();
						
					}
					
					
					
					setTimeout(() => {
						
						div_img_hero_screen_game_select_img[0].src = hero.idle;
						
					}, 1000);
					
				}
				else if (tela_projetion_directions_select_span[3].innerText == "")
				{
					
					tela_projetion_directions_select_span[3].innerText = div_buttons_directions_select_buttons[btn].value;
					
					if (array_sequencia[3] === tela_projetion_directions_select_span[3].innerText)
					{
						
						
						setTimeout (()=>{
							
							if (som_ligado)
							{
								
								som_escolhar_correta.play();
								
							}
							
						}, 900)
						
						tela_projetion_directions.style.backgroundColor = "#4aff55";
						
						setTimeout (()=>{
							
							tela_projetion_directions.style.backgroundColor = "#eeeeee";
							
						}, 800)
						
						setTimeout (()=>{
							
							div_observar_e_repete.innerText = "Parabéns! Você concluiu essa rodada com sucesso!";
							
							tela_projetion_directions.style.backgroundColor = "#40c014";
							
							
							if (som_ligado)
							{
								
								som_fase_concluida_com_sucesso.play();
								
							}
							
							for (let a = 0; a < array_sequencia.length; a++)
							{
							
							div_mostrar_resposta.innerText += " " + array_sequencia[a] + " ";
							
							}
							
							quantidade_xp = quantidade_xp + Aleatory_Number_Interval(250,1000);
							
							organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
							
							Level_Bar_Progress ();
							Lottery_Power_Up_Down();
							
							setTimeout (()=>{
								
								start_game = true;
								
								Start_Round();
								
							}, 2000)
							
						}, 900)
						
						
					}
					else
					{
						
						
						if (som_ligado)
						{
							
							som_escolhar_errada.play();
							
						}
						
						div_observar_e_repete.innerText = "Que Pena! Você errou";
						tela_projetion_directions.style.backgroundColor = "#ff0030";
						
						end_round = false;
						
						for (let a = 0; a < array_sequencia.length; a++)
						{
							
							div_mostrar_resposta.innerText += " " + array_sequencia[a] + " ";
							
						}
						
						Situation_Life ();
						
						
					}
					
					
					end_round = false;
					
					setTimeout(() => {
						
						div_img_hero_screen_game_select_img[0].src = hero.idle;
						
					}, 1000);
					
				}
				
				
			}
			
		}
		
		//Função para verificar quantas vidas o herói tem e ver continuar jogando ou não
		function Situation_Life ()
		{
			
			if (organize_div_select_p_screen_game[0].innerText === "❤️❤️❤️")
			{
				
				start_game = true;
				
				organize_div_select_p_screen_game[0].innerText = "❤️❤️";
				
				setTimeout (()=>{
					
					Start_Round();
					
				}
				, 3000);
				
			}
			else if (organize_div_select_p_screen_game[0].innerText === "❤️❤️")
			{
				
				start_game = true;
				
				organize_div_select_p_screen_game[0].innerText = "❤️";
				
				setTimeout (()=>{
					
					Start_Round();
					
				}
				, 3000);
				
			}
			else if (organize_div_select_p_screen_game[0].innerText === "❤️")
			{
				
				start_game = true;
				
				organize_div_select_p_screen_game[0].innerText = "";
				
				setTimeout (()=>{
					
					Start_Round();
					
				}
				, 3000);
				
			}
			else if (organize_div_select_p_screen_game[0].innerText == "")
			{
				
				setTimeout (()=>{
					
					
					screens[4].classList.add("display-none");
					screens[5].classList.remove("display-none");
					
					Fill_Screen_End_Game();
					
				}, 4000);
				
			}
			
		}
		
		//Função para mexer na barra de progresso de arcodo a let quantidade_de_xp
		function Level_Bar_Progress () 
		{
			
			if ((quantidade_xp >= 0) && (quantidade_xp < 1001))
			{
				
				hero = table_heros[0];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 1001;
				
			}
			else if ((quantidade_xp >= 1001) && (quantidade_xp < 2001))
			{
				
				hero = table_heros[1];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 2001;
				
			}
			else if ((quantidade_xp >= 2001) && (quantidade_xp < 5001))
			{
				
				hero = table_heros[2];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 5001;
				
			}
			else if ((quantidade_xp >= 5001) && (quantidade_xp < 7001))
			{
				
				hero = table_heros[3];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 7001;
				
			}
			else if ((quantidade_xp >= 7001) && (quantidade_xp < 8001))
			{
				
				hero = table_heros[4];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 8001;
				
			}
			else if ((quantidade_xp >= 8001) && (quantidade_xp < 9001))
			{
				
				hero = table_heros[5];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 9001;
				
			}
			else if ((quantidade_xp >= 9001) && (quantidade_xp < 10001))
			{
				
				hero = table_heros[6];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 10001;
				
			}
			else if (quantidade_xp >= 10001)
			{
				
				hero = table_heros[7];
				organize_div_select_p_screen_game[1].innerText = hero.level;
				organize_div_select_progress_screen_game[0].max = 10001;
				
				organize_div_select_progress_screen_game[0].style.accentColor = "#ec0f3d";
				organize_div_select_sub_screen_game[0].innerText = "🎉";
				
			};
			
			organize_div_select_progress_screen_game[0].value = quantidade_xp;
			
		}
		
		//Função para sortear se ao fim da rodada que herói vai ganhar uma vantagem ou desvantagem no jogo
		function Lottery_Power_Up_Down ()
		{
			
			
			let power_up_array = ["🌟","⭐","⌛","🪵","🪨","✨","🛡️","🏹","🚫","🍎","🍯","🍒"];
			
			let power_down_array = ["⌛","✨","🏹","🍎","🍯"];
			
			let reward_or_no = Aleatory_Number_Interval (0, 1);
			
			bonus_liberated = true;
			
			//Mico 0 Presente 1
			if (reward_or_no === 0)
			{
				
				
				Shuffle_Array(power_down_array);
				
				div_power_up_down_select_button[0].innerText = power_down_array[0];
				
				power_or_not = false;
				
			}
			else if (reward_or_no === 1)
			{
				
				Shuffle_Array(power_up_array);
				
				div_power_up_down_select_button[0].innerText = power_up_array[0];
				
				power_or_not = true;
				
			}
			
		}
		
		//Função para usuário pegar vantagem ou não, e verificar o que é quantos pontos ganho ou perdeu
		function Get_Power_Up_Down ()
		{
			
			/*
				item Pontos
				🌟   1000 Sorte grande as estrelas brilham para você
				⭐   200  Você merece uma estrela
				⌛   0 ou 10.000 - Regresso de Tempo, Progresso no Tempo
				🪵   25 - Madeira é Madeira, sempre útil
				🪨   5 - Pedra Bonita
				✨   50 ou -50 - Bonito, Meus Olhos!
				🛡️   100 proteção
				🏹   75 ou -100 - Na Mosca, Aí! Aí! Aí!
				🚫   500 - Pulou um turno
				🍎   120 ou -80 Que delícia de maçã, maçã podre
				🍯   60 ou -90 mel delicioso, Abelhas!
				🍒   40 a cereja do bolo
			*/
			
			
			if ((som_ligado) && (bonus_liberated))
			{
				
				som_sorteio_power.play();
				
			}
			
			
			setTimeout(()=>{
				
				//true presente - false mico
				if (power_or_not == true)
				{
					
					if (div_power_up_down_select_button[0].innerText === "🌟")
					{
						
						quantidade_xp = quantidade_xp + 1000;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Sorte grande as estrelas brilham para você";
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "⭐")
					{
						
						quantidade_xp = quantidade_xp + 200;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Você merece uma estrela";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "⌛")
					{
						
						quantidade_xp = quantidade_xp + 10000;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Progresso no Tempo";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🪵")
					{
						
						quantidade_xp = quantidade_xp + 25;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Madeira é Madeira, sempre útil";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🪨")
					{
						
						quantidade_xp = quantidade_xp + 5;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Pedra Bonita";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "✨")
					{
						
						quantidade_xp = quantidade_xp + 50;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Bonito!";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🛡️")
					{
						
						quantidade_xp = quantidade_xp + 100;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Proteção";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🏹")
					{
						
						quantidade_xp = quantidade_xp + 75;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Na Mosca!";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🚫")
					{
						
						quantidade_xp = quantidade_xp + 500;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Pulou um turno";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
							
							
							Lottery_Power_Up_Down();
							
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🍎")
					{
						
						quantidade_xp = quantidade_xp + 120;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Que delícia de maçã!";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🍯")
					{
						
						quantidade_xp = quantidade_xp + 60;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "Mel delicioso!";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🍒")
					{
						
						quantidade_xp = quantidade_xp + 40;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🎁";
						div_power_up_down_select_sub[0].innerText = "A cereja do bolo";
						
						
						if(som_ligado)
						{
							
							som_presente.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
				}
				
				if (power_or_not == false)
				{
					
					if (div_power_up_down_select_button[0].innerText === "⌛")
					{
						
						quantidade_xp = 0;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🐵";
						div_power_up_down_select_sub[0].innerText = "Regresso no Tempo";
						
						
						if(som_ligado)
						{
							
							som_mico.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "✨")
					{
						
						quantidade_xp = quantidade_xp - 50;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🐵";
						div_power_up_down_select_sub[0].innerText = "Meus Olhos!";
						
						
						if(som_ligado)
						{
							
							som_mico.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					
					if (div_power_up_down_select_button[0].innerText === "🏹")
					{
						
						quantidade_xp = quantidade_xp - 100;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🐵";
						div_power_up_down_select_sub[0].innerText = "Aí! Aí! Aí!";
						
						
						if(som_ligado)
						{
							
							som_mico.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					
					if (div_power_up_down_select_button[0].innerText === "🍎")
					{
						
						quantidade_xp = quantidade_xp - 80;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🐵";
						div_power_up_down_select_sub[0].innerText = "Maçã Bichada!";
						
						
						if(som_ligado)
						{
							
							som_mico.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					if (div_power_up_down_select_button[0].innerText === "🍯")
					{
						
						quantidade_xp = quantidade_xp - 90;
						
						organize_div_select_sub_screen_game[1].innerText = quantidade_xp + " xp";
						
						Level_Bar_Progress();
						
						div_power_up_down_select_button[0].innerText = "🐵";
						div_power_up_down_select_sub[0].innerText = "Abelhas!!!";
						
						
						if(som_ligado)
						{
							
							som_mico.play();
							
						}
						
						
						setTimeout(()=>{
							
							div_power_up_down_select_button[0].innerText = "❓";
							div_power_up_down_select_sub[0].innerText = " ";
							
						}, 2500)
						
					}
					
					
				}
			
			}, 500);
			
			
			bonus_liberated = false;
			
		}
		
		//Função para preencher tela de finalização com as informações atuais do herói
		function Fill_Screen_End_Game ()
		{
			
			organize_div_fim_aventura_select_p[0].innerText = "Sua Pontuação: " + quantidade_xp + " XP";
			organize_div_fim_aventura_select_p[1].innerText = "O Herói de nome " + get_nome_heroi + " está no nível de " + hero.nivel.substring(6);;
			organize_div_fim_aventura_select_p[2].innerText = hero.level;
			
			organize_div_fim_aventura_select_img[0].src = hero.idle;
			
		}
		
		//Evento para sair do jogo, ir para tela de finalização
		div_button_sair_screen_game_select_buttons[0].addEventListener("click", () => {
			
			som_ligado = false;
			
			button_som.innerText = "🔇";
			button_som.title = "Som Desligado";
			
			div_power_up_down_select_button[0].innerText = "❓";
			
			start_game = false;
			end_round = false;
			sair_ativa = true;
			
			screens[4].classList.add("display-none");
			screens[5].classList.remove("display-none");
			
			Fill_Screen_End_Game();
			
		});
		
		
		/*                                                                                                                                        */
		///Tela de Finalização
		//Evento para voltar para o menu
		button_menu_inicial_end_game.addEventListener("click", ()=>{
			
			screens[5].classList.add("display-none");
			screens[2].classList.remove("display-none");
			
		});
		
		/*                                                                                                                                        */
		
	/*                                                                                                                                        */
	///Functions Gerais
	
	// Função para pegar um número aleatório dentro de um intervelo
	function Aleatory_Number_Interval (numero_min, numero_max)
	{
		return Math.floor(Math.random() * (numero_max - numero_min + 1)) + numero_min;
	}
	
	//Função para pegar item aleatório de um array
	function Aleatory_Item_Array (array)
	{
		return array[Math.floor(Math.random() * array.length)];
	}
	
	//Função para misturar array
	function Shuffle_Array(array) {
		
		for (let i = array.length - 1; i > 0; i--)
		{
			
			const j = Math.floor(Math.random() * (i + 1));
			
			[array[i], array[j]] = [array[j], array[i]];
			
		}
		
		return array;
		
	}
	
	//Função para pegar elemento html pelo id
	function Id (identificado) {
		return document.getElementById(identificado);
	};
