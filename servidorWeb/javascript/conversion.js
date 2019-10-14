function soloNum(e) {
            var tecla= e.which || e.keyCode;
            if((tecla>=48 && tecla<=57) || tecla    ==8)
                return true;
            else
                return false;
        }

		var unidades= ['','uno','dos','tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho' ,'nueve' ];
		var onceNueve = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve'];
		var decenas = ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
		var centenas = ['ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
		var veinti = 'veinti';
		var cien= 'cien';

		function transforma(numero1,numero2)
		{
			var num1= numero1.value;
//limpiar cuadro
			if (num1.length==0 || num1.substr(0,1)=='0' ) 
			{
				numero2.value='Escribe un número entre 1 y 1000';
				
			}
			else
					if (num1.length==1) 
					{
						numero2.value= unidades[num1];
					}
					else
//dos cifras
						if(num1.length==2)
						{
							if(num1.substr(0,1)=='1')
							{
//diez
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[0];
								else
//once al diecinueve
									numero2.value= onceNueve[num1.substr(1,1)]
							}
//veintes
							if(num1.substr(0,1)=='2')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[1];
								else
									numero2.value= veinti + unidades[num1.substr(1,1)]
							}
//treintas
							if(num1.substr(0,1)=='3')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[2];
								else
									numero2.value= decenas[2] +' y '+ unidades[num1.substr(1,1)]
							}
//cuarentas
							if(num1.substr(0,1)=='4')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[3];
								else
									numero2.value= decenas[3] +' y '+ unidades[num1.substr(1,1)]
							}
//cincuentas
							if(num1.substr(0,1)=='5')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[4];
								else
									numero2.value= decenas[4] +' y '+ unidades[num1.substr(1,1)]
							}
//sesentas
							if(num1.substr(0,1)=='6')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[5];
								else
									numero2.value= decenas[5] +' y '+ unidades[num1.substr(1,1)]
							}
//setentas
							if(num1.substr(0,1)=='7')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[6];
								else
									numero2.value= decenas[6] +' y '+ unidades[num1.substr(1,1)]
							}
//ochentas
							if(num1.substr(0,1)=='8')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[7];
								else
									numero2.value= decenas[7] +' y '+ unidades[num1.substr(1,1)]
							}
//noventas
							if(num1.substr(0,1)=='9')
							{
								if (num1.substr(1,1)=='0')
									numero2.value= decenas[8];
								else
									numero2.value= decenas[8] +' y '+ unidades[num1.substr(1,1)]
							}
						}
						else
							
//centenas
							if(num1.length==3){
//cientos
											if(num1.substr(0,1)=='1')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= cien;
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[0] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+ decenas[0];
													else
														numero2.value= centenas[0] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[1];
													else
														numero2.value= centenas[0] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[2];
													else
														numero2.value= centenas[0] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[3];
													else
														numero2.value= centenas[0] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[4];
													else
														numero2.value= centenas[0] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[5];
													else
														numero2.value= centenas[0] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[6];
													else
														numero2.value= centenas[0] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[7];
													else
														numero2.value= centenas[0] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[0] +' '+decenas[8];
													else
														numero2.value= centenas[0] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}
									else
//doscientos
									if(num1.substr(0,1)=='2')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[1];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[1] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+ decenas[0];
													else
														numero2.value= centenas[1] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[1];
													else
														numero2.value= centenas[1] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[2];
													else
														numero2.value= centenas[1] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[3];
													else
														numero2.value= centenas[1] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[4];
													else
														numero2.value= centenas[1] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[5];
													else
														numero2.value= centenas[1] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[6];
													else
														numero2.value= centenas[1] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[7];
													else
														numero2.value= centenas[1] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[1] +' '+decenas[8];
													else
														numero2.value= centenas[1] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}
									else
//trescientos
									
									if(num1.substr(0,1)=='3')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[2];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[2] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+ decenas[0];
													else
														numero2.value= centenas[2] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[1];
													else
														numero2.value= centenas[2] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[2];
													else
														numero2.value= centenas[2] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[3];
													else
														numero2.value= centenas[2] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[4];
													else
														numero2.value= centenas[2] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[5];
													else
														numero2.value= centenas[2] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[6];
													else
														numero2.value= centenas[2] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[7];
													else
														numero2.value= centenas[2] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[2] +' '+decenas[8];
													else
														numero2.value= centenas[2] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}
									else
//cuatrocientos

									if(num1.substr(0,1)=='4')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[3];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[3] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+ decenas[0];
													else
														numero2.value= centenas[3] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[1];
													else
														numero2.value= centenas[3] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[2];
													else
														numero2.value= centenas[3] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[3];
													else
														numero2.value= centenas[3] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[4];
													else
														numero2.value= centenas[3] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[5];
													else
														numero2.value= centenas[3] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[6];
													else
														numero2.value= centenas[3] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[7];
													else
														numero2.value= centenas[3] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[3] +' '+decenas[8];
													else
														numero2.value= centenas[3] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}
									else
//quinientos						
									if(num1.substr(0,1)=='5')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[4];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[4] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+ decenas[0];
													else
														numero2.value= centenas[4] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[1];
													else
														numero2.value= centenas[4] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[2];
													else
														numero2.value= centenas[4] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[3];
													else
														numero2.value= centenas[4] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[4];
													else
														numero2.value= centenas[4] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[5];
													else
														numero2.value= centenas[4] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[6];
													else
														numero2.value= centenas[4] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[7];
													else
														numero2.value= centenas[4] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[4] +' '+decenas[8];
													else
														numero2.value= centenas[4] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}

									else
//seiscientos
									if(num1.substr(0,1)=='6')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[5];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[5] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+ decenas[0];
													else
														numero2.value= centenas[5] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[1];
													else
														numero2.value= centenas[5] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[2];
													else
														numero2.value= centenas[5] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[3];
													else
														numero2.value= centenas[5] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[4];
													else
														numero2.value= centenas[5] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[5];
													else
														numero2.value= centenas[5] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[6];
													else
														numero2.value= centenas[5] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[7];
													else
														numero2.value= centenas[5] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[5] +' '+decenas[8];
													else
														numero2.value= centenas[5] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}

									else
//setecientos
									
									if(num1.substr(0,1)=='7')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[6];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[6] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+ decenas[0];
													else
														numero2.value= centenas[6] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[1];
													else
														numero2.value= centenas[6] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[2];
													else
														numero2.value= centenas[6] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[3];
													else
														numero2.value= centenas[6] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[4];
													else
														numero2.value= centenas[6] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[5];
													else
														numero2.value= centenas[6] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[6];
													else
														numero2.value= centenas[6] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[7];
													else
														numero2.value= centenas[6] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[6] +' '+decenas[8];
													else
														numero2.value= centenas[6] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}

									else
//ochocientos
									
									if(num1.substr(0,1)=='8')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[7];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[7] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+ decenas[0];
													else
														numero2.value= centenas[7] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[1];
													else
														numero2.value= centenas[7] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[2];
													else
														numero2.value= centenas[7] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[3];
													else
														numero2.value= centenas[7] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[4];
													else
														numero2.value= centenas[7] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[5];
													else
														numero2.value= centenas[7] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[6];
													else
														numero2.value= centenas[7] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[7];
													else
														numero2.value= centenas[7] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[7] +' '+decenas[8];
													else
														numero2.value= centenas[7] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}

									else
//novecientos
									
									if(num1.substr(0,1)=='9')
											{
												if (num1.substr(1,2)=='00')
													numero2.value= centenas[8];
											else

											if(num1.substr(1,1)=='0')
													numero2.value= centenas[8] +' '+ unidades[num1.substr(2,1)];
											
											if(num1.substr(1,1)=='1')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+ decenas[0];
													else
														numero2.value= centenas[8] +' '+ onceNueve[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='2')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[1];
													else
														numero2.value= centenas[8] +' '+veinti + unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='3')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[2];
													else
														numero2.value= centenas[8] +' '+decenas[2] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='4')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[3];
													else
														numero2.value= centenas[8] +' '+decenas[3] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='5')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[4];
													else
														numero2.value= centenas[8] +' '+decenas[4] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='6')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[5];
													else
														numero2.value= centenas[8] +' '+decenas[5] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='7')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[6];
													else
														numero2.value= centenas[8] +' '+decenas[6] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='8')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[7];
													else
														numero2.value= centenas[8] +' '+decenas[7] +' y '+ unidades[num1.substr(2,1)]
											}

											if(num1.substr(1,1)=='9')
											{
													if (num1.substr(2,1)=='0')
														numero2.value= centenas[8] +' '+decenas[8];
													else
														numero2.value= centenas[8] +' '+decenas[8] +' y '+ unidades[num1.substr(2,1)]
											}	
										
									}
							}
							else
								if (num1.length>3) 
									numero2.value='Escribe un número entre 1 y 1000'
		}
