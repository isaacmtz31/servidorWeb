
function soloNum(e) {
            var tecla= e.which || e.keyCode;
            if((tecla>=48 && tecla<=57) || tecla    ==8)
                return true;
            else
                return false;
        }

		var unidades= ['','uno','dos','tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho' ,'nueve' ];
		var onceNueve = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve'];
		var decenas = ['','diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
		var centenas = ['','ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
		var miles=['', 'mil','dos mil','tres mil', 'cuatro mil ', 'cinco mil', 'seis mil', 'siete mil ', 'ocho mil' ,'nueve mil' ];
		//var diezMiles=['','diez mil', 'veinte mil', 'treinta mil ', 'cuarenta mil', 'cincuenta mil', 'sesenta mil', 'setenta mil', 'ochenta mil', 'noventa mil'];
		var veinti = 'veinti';
		var cien= 'cien';

		function transforma(numero1,numero2)
		{
			var num1= numero1.value;

			if (num1.length==0 || num1.substr(0,1)=='0' ) {
				numero2.value='Ingresa un número entre 1 y 999999';
			}	
			else
				if (num1.length==1) 
					numero2.value= unidades[num1];
				else
					if(num1.length==2)
						{

								if (num1.substr(1,1)=='0')
									numero2.value= decenas[num1.substr(0,1)];
								else
									if (num1>=11 && num1<=19) 
										numero2.value= onceNueve[num1.substr(1,1)]
									else
									if (num1>=21 && num1<=29)
										numero2.value= veinti+unidades[num1.substr(1,1)];
									else
										numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]	
						}
				else		
					if(num1.length==3)
					{
						if (num1.substr(1,2)=='00')
						{
							if(num1.substr(0,1)=='1')
								numero2.value= cien;
							else
								numero2.value=centenas[num1.substr(0,1)];
						}
						else
							if(num1.substr(2,1)=='0')
								numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]
							else
								if(num1.substr(1,1)=='0')
									numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]
								else
									if(num1.substr(1,1)=='1')
										numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]
									else
										if(num1.substr(1,1)=='2')
											numero2.value= centenas[num1.substr(0,1)]+' '+veinti+unidades[num1.substr(2,1)]
										else
											if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
												numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]		
					}

					else
						if (num1.length==4) 
						{
							if (num1.substr(1,3)=='000')
								numero2.value=miles[num1.substr(0,1)];
							else
								if (num1.substr(2,2)=='00')
								{
									if (num1.substr(1,1)=='1') 
										numero2.value=miles[num1.substr(0,1)]+ ' '+ cien;
									else
										numero2.value= miles[num1.substr(0,1)]+ ' '+ centenas[num1.substr(1,1)]
								}
								else
									if(num1.substr(3,1)=='0')
										numero2.value= miles[num1.substr(0,1)]+ ' '+centenas[num1.substr(1,1)]+' '+ decenas[num1.substr(2,1)];
									else
										if(num1.substr(2,1)=='0')
											numero2.value= miles[num1.substr(0,1)]+ ' '+centenas[num1.substr(1,1)]+' '+ unidades[num1.substr(3,1)];
										else
											if(num1.substr(2,1)=='1')
												numero2.value= miles[num1.substr(0,1)]+ ' '+centenas[num1.substr(1,1)]+' '+ onceNueve[num1.substr(3,1)];
											else
												if(num1.substr(2,1)=='2')
													numero2.value= miles[num1.substr(0,1)]+ ' '+centenas[num1.substr(1,1)]+' '+veinti+unidades[num1.substr(3,1)];
												else
													if(num1.substr(2,1)>'1' && num1.substr(2,1)<='9')
														numero2.value= miles[num1.substr(0,1)]+ ' '+centenas[num1.substr(1,1)]+' '+decenas[num1.substr(2,1)]+ ' y'+' '+ unidades[num1.substr(3,1)];
						}
//abre 5 cifras
						else
							if(num1.length==5)
							{
								if(num1.substr(2,3)=='000')
								{
									if (num1.substr(1,1)=='0')
										numero2.value= decenas[num1.substr(0,1)]+ " mil";
									else
										if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
											numero2.value= onceNueve[num1.substr(1,1)]+ " mil";
										else
											if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
											{
												if(num1.substr(0,2)=='21')
													numero2.value="veintiunmil";
												else
													numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil";
											}
												
											else
												if(num1.substr(1,1)==1)
													numero2.value=decenas[num1.substr(0,1)]+" y un mil";
												else
													numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil";	
								}
								else
									if(num1.substr(2,1)=='0')
									{
										if(num1.substr(2,2)=='00')
										{
											if (num1.substr(1,1)=='0')
												numero2.value= decenas[num1.substr(0,1)]+ " mil "+ unidades[num1.substr(4,1)];
											else
												if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
													numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+ unidades[num1.substr(4,1)];
												else
													if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
													{
														if(num1.substr(0,2)=='21')
															numero2.value="veintiunmil "+ unidades[num1.substr(4,1)];
														else
															numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+ unidades[num1.substr(4,1)];
													}
																					
													else
														if(num1.substr(1,1)==1)
															numero2.value=decenas[num1.substr(0,1)]+" y un mil "+ unidades[num1.substr(4,1)];
														else
															numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+ unidades[num1.substr(4,1)];	
										}	
										else
											if(num1.substr(4,1)=='0')
											{
												if (num1.substr(1,1)=='0')
													numero2.value= decenas[num1.substr(0,1)]+ " mil "+ decenas[num1.substr(3,1)];
												else
													if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
														numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+ decenas[num1.substr(3,1)];
													else
														if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
														{
															if(num1.substr(0,2)=='21')
																numero2.value="veintiunmil "+ decenas[num1.substr(3,1)];
															else
																numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+ decenas[num1.substr(3,1)];
														}
																					
														else
															if(num1.substr(1,1)==1)
																numero2.value=decenas[num1.substr(0,1)]+" y un mil "+ decenas[num1.substr(3,1)];
															else
																numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+ decenas[num1.substr(3,1)];	
											}
											else
												if(num1.substr(3,1)=='1')
												{
													if (num1.substr(1,1)=='0')
														numero2.value= decenas[num1.substr(0,1)]+ " mil "+ onceNueve[num1.substr(4,1)];
													else
														if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
															numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+ onceNueve[num1.substr(4,1)];
														else
															if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
															{
																if(num1.substr(0,2)=='21')
																	numero2.value="veintiunmil "+ onceNueve[num1.substr(4,1)];
																else
																	numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+ onceNueve[num1.substr(4,1)];
															}
																					
															else
																if(num1.substr(1,1)==1)
																	numero2.value=decenas[num1.substr(0,1)]+" y un mil "+ onceNueve[num1.substr(4,1)];
																else
																	numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+ onceNueve[num1.substr(4,1)];
												}
												else
													if(num1.substr(3,1)=='2')
													{
														if (num1.substr(1,1)=='0')
															numero2.value= decenas[num1.substr(0,1)]+ " mil veinti"+ unidades[num1.substr(4,1)];
														else
															if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
																numero2.value= unidades[num1.substr(1,1)]+ " mil veinti"+ unidades[num1.substr(4,1)];
															else
																if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
																{
																	if(num1.substr(0,2)=='21')
																		numero2.value="veintiunmil veinti"+ unidades[num1.substr(4,1)];
																	else
																		numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil veinti"+ unidades[num1.substr(4,1)];
																}
																					
																else
																	if(num1.substr(1,1)==1)
																		numero2.value=decenas[num1.substr(0,1)]+" y un mil veinti"+ unidades[num1.substr(4,1)];
																	else
																		numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil veinti"+ unidades[num1.substr(4,1)];
													}
													else
														if(num1.substr(3,1)>=3)
														{
															if (num1.substr(1,1)=='0')
																numero2.value= decenas[num1.substr(0,1)]+ " mil "+ decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
															else
																if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
																	numero2.value= unidades[num1.substr(1,1)]+ " mil "+ decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																else
																	if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
																	{
																		if(num1.substr(0,2)=='21')
																			numero2.value="veintiunmil "+ decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																		else
																			numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+ decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																	}
									
																	else
																		if(num1.substr(1,1)==1)
																			numero2.value=decenas[num1.substr(0,1)]+" y un mil "+ + decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																		else
																			numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+ decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
														}
									}
									else
										if(num1.substr(2,1)==1&& num1.substr(3,2)=='00')
										{
											if (num1.substr(1,1)=='0')
												numero2.value= decenas[num1.substr(0,1)]+ " mil cien";
											else
												if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
													numero2.value= onceNueve[num1.substr(1,1)]+ " mil cien";
												else
													if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
													{
														if(num1.substr(0,2)=='21')
															numero2.value="veintiunmil cien";
														else
															numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil cien";
													}
												
													else
														if(num1.substr(1,1)==1)
															numero2.value=decenas[num1.substr(0,1)]+" y un mil cien";
														else
															numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil cien";
										}
										else
											if(num1.substr(2,1)>1&& num1.substr(3,2)=='00')
											{
												if (num1.substr(1,1)=='0')
													numero2.value= decenas[num1.substr(0,1)]+ " mil "+centenas[num1.substr(2,1)];
												else
													if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
														numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)];
													else
														if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
														{
															if(num1.substr(0,2)=='21')
																numero2.value="veintiunmil "+centenas[num1.substr(2,1)];
															else
																numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)];
														}
												
														else
															if(num1.substr(1,1)==1)
																numero2.value=decenas[num1.substr(0,1)]+" y un mil "+centenas[num1.substr(2,1)];
															else
																numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)];
											}
											else
												if(num1.substr(4,1)=='0')
												{
													if (num1.substr(1,1)=='0')
														numero2.value= decenas[num1.substr(0,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)];
													else
														if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
															numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)];
														else
															if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
															{
																if(num1.substr(0,2)=='21')
																	numero2.value="veintiunmil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)];
																else
																	numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)];
															}
												
															else
																if(num1.substr(1,1)==1)
																	numero2.value=decenas[num1.substr(0,1)]+" y un mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)];
																else
																	numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)];
												}
												else
													if(num1.substr(3,1)=='0')
													{
														if (num1.substr(1,1)=='0')
															numero2.value= decenas[num1.substr(0,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+unidades[num1.substr(4,1)];
														else
															if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
																numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+unidades[num1.substr(4,1)];
															else
																if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
																{
																	if(num1.substr(0,2)=='21')
																		numero2.value="veintiunmil "+centenas[num1.substr(2,1)]+" "+unidades[num1.substr(4,1)];
																	else
																		numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+unidades[num1.substr(4,1)];
																}
												
																else
																	if(num1.substr(1,1)==1)
																		numero2.value=decenas[num1.substr(0,1)]+" y un mil "+centenas[num1.substr(2,1)]+" "+unidades[num1.substr(4,1)];
																	else
																		numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+unidades[num1.substr(4,1)];
													}
													else
														if(num1.substr(3,1)=='1')
														{
															if (num1.substr(1,1)=='0')
																numero2.value= decenas[num1.substr(0,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+onceNueve[num1.substr(4,1)];
															else
																if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
																	numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+onceNueve[num1.substr(4,1)];
																else
																	if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
																	{
																		if(num1.substr(0,2)=='21')
																			numero2.value="veintiunmil "+centenas[num1.substr(2,1)]+" "+onceNueve[num1.substr(4,1)];
																		else
																			numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+onceNueve[num1.substr(4,1)];
																	}
												
																	else
																		if(num1.substr(1,1)==1)
																			numero2.value=decenas[num1.substr(0,1)]+" y un mil "+centenas[num1.substr(2,1)]+" "+onceNueve[num1.substr(4,1)];
																		else
																			numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+onceNueve[num1.substr(4,1)];
														}
														else
															if(num1.substr(3,1)=='2')
															{
																if (num1.substr(1,1)=='0')
																	numero2.value= decenas[num1.substr(0,1)]+ " mil "+centenas[num1.substr(2,1)]+" veinti"+unidades[num1.substr(4,1)];
																else
																	if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
																		numero2.value= unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" veinti"+unidades[num1.substr(4,1)];
																	else
																		if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
																		{
																			if(num1.substr(0,2)=='21')
																				numero2.value="veintiunmil "+centenas[num1.substr(2,1)]+" veinti"+unidades[num1.substr(4,1)];
																			else
																				numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" veinti"+unidades[num1.substr(4,1)];
																		}
												
																		else
																			if(num1.substr(1,1)==1)
																				numero2.value=decenas[num1.substr(0,1)]+" y un mil "+centenas[num1.substr(2,1)]+" veinti"+unidades[num1.substr(4,1)];
																			else
																				numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" veinti"+unidades[num1.substr(4,1)];
															}
															else
																if(num1.substr(3,1)>'2' && num1.substr(3,1)<='9')
																{
																	if (num1.substr(1,1)=='0')
																		numero2.value= decenas[num1.substr(0,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																	else
																		if (num1.substr(0,2)>=11 && num1.substr(0,2)<=19) 
																			numero2.value= onceNueve[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																		else
																			if (num1.substr(0,2)>=21 && num1.substr(0,2)<=29)
																			{
																				if(num1.substr(0,2)=='21')
																					numero2.value="veintiunmil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																				else
																					numero2.value= veinti+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																			}
												
																			else
																				if(num1.substr(1,1)==1)
																					numero2.value=decenas[num1.substr(0,1)]+" y un mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																				else
																					numero2.value=decenas[num1.substr(0,1)]+' '+ 'y'+' '+unidades[num1.substr(1,1)]+ " mil "+centenas[num1.substr(2,1)]+" "+decenas[num1.substr(3,1)]+" y "+unidades[num1.substr(4,1)];
																}
/*cierra5cifras*/			}
							else
//abre 6 cifras
								if(num1.length==6)
								{
									if(num1.substr(3,3)=='000')
									{
										if (num1.substr(1,2)=='00')
										{
											if(num1.substr(0,1)=='1')
												numero2.value= "cien mil";
											else
												numero2.value=centenas[num1.substr(0,1)]+" mil";
										}
										else
											if(num1.substr(2,1)=='0')
												numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil";
											else
												if(num1.substr(1,1)=='0')
												{
													if(num1.substr(2,1)=='1')
														numero2.value= centenas[num1.substr(0,1)]+" un mil";
													else
														numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil";
												}
												else
													if(num1.substr(1,1)=='1')
														numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil";
													else
														if(num1.substr(1,1)=='2')
														{
															if(num1.substr(1,2)=='21')
																numero2.value=centenas[num1.substr(0,1)]+" veintiunmil ";
															else
																numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil";
														}
														else
															if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
															{
																if(num1.substr(2,1)=='1')
																	numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil";
																else
																	numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil";
															}
									}
									else
										if(num1.substr(3,1)=='0')
										{
											if(num1.substr(4,1)=='0')
											{
												if (num1.substr(1,2)=='00')
												{
													if(num1.substr(0,1)=='1')
														numero2.value= "cien mil "+unidades[num1.substr(5,1)];
													else
														numero2.value=centenas[num1.substr(0,1)]+" mil "+unidades[num1.substr(5,1)];
												}
												else
													if(num1.substr(2,1)=='0')
														numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+unidades[num1.substr(5,1)];
													else
														if(num1.substr(1,1)=='0')
														{
															if(num1.substr(2,1)=='1')
																numero2.value= centenas[num1.substr(0,1)]+" un mil "+unidades[num1.substr(5,1)];
															else
																numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+unidades[num1.substr(5,1)];
														}
														else
															if(num1.substr(1,1)=='1')
																numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+unidades[num1.substr(5,1)];
															else
																if(num1.substr(1,1)=='2')
																{
																	if(num1.substr(1,2)=='21')
																		numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+unidades[num1.substr(5,1)];
																	else
																		numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+unidades[num1.substr(5,1)];
																}
																else
																	if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																	{
																		if(num1.substr(2,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+unidades[num1.substr(5,1)];
																		else
																			numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+unidades[num1.substr(5,1)];
																	}
											}
											else
												if(num1.substr(5,1)=='0')
												{
													if (num1.substr(1,2)=='00')
													{
														if(num1.substr(0,1)=='1')
															numero2.value= "cien mil "+decenas[num1.substr(4,1)];
														else
															numero2.value=centenas[num1.substr(0,1)]+" mil "+decenas[num1.substr(4,1)];
													}
													else
														if(num1.substr(2,1)=='0')
															numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+decenas[num1.substr(4,1)];
														else
															if(num1.substr(1,1)=='0')
															{
																if(num1.substr(2,1)=='1')
																	numero2.value= centenas[num1.substr(0,1)]+" un mil "+decenas[num1.substr(4,1)];
																else
																	numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+decenas[num1.substr(4,1)];
															}
															else
																if(num1.substr(1,1)=='1')
																	numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+decenas[num1.substr(4,1)];
																else
																	if(num1.substr(1,1)=='2')
																	{
																		if(num1.substr(1,2)=='21')
																			numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+decenas[num1.substr(4,1)];
																		else
																			numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+decenas[num1.substr(4,1)];
																	}
																	else
																		if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																		{
																			if(num1.substr(2,1)=='1')
																				numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+decenas[num1.substr(4,1)];
																			else
																				numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+decenas[num1.substr(4,1)];
																		}
												}
												else
													if(num1.substr(4,1)=='1')
													{
														if (num1.substr(1,2)=='00')
														{
															if(num1.substr(0,1)=='1')
																numero2.value= "cien mil "+onceNueve[num1.substr(5,1)];
															else
																numero2.value=centenas[num1.substr(0,1)]+" mil "+onceNueve[num1.substr(5,1)];
														}
														else
															if(num1.substr(2,1)=='0')
																numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+onceNueve[num1.substr(5,1)];
															else
																if(num1.substr(1,1)=='0')
																{
																	if(num1.substr(2,1)=='1')
																		numero2.value= centenas[num1.substr(0,1)]+" un mil "+onceNueve[num1.substr(5,1)];
																	else
																		numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+onceNueve[num1.substr(5,1)];
																}
																else
																	if(num1.substr(1,1)=='1')
																		numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+onceNueve[num1.substr(5,1)];
																	else
																		if(num1.substr(1,1)=='2')
																		{
																			if(num1.substr(1,2)=='21')
																				numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+onceNueve[num1.substr(5,1)];
																			else
																				numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+onceNueve[num1.substr(5,1)];
																		}
																		else
																			if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																			{
																				if(num1.substr(2,1)=='1')
																					numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+onceNueve[num1.substr(5,1)];
																				else
																					numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+onceNueve[num1.substr(5,1)];
																			}
													}
													else
														if(num1.substr(4,1)=='2')
														{
															if (num1.substr(1,2)=='00')
															{
																if(num1.substr(0,1)=='1')
																	numero2.value= "cien mil veinti"+unidades[num1.substr(5,1)];
																else
																	numero2.value=centenas[num1.substr(0,1)]+" mil veinti"+unidades[num1.substr(5,1)];
															}
															else
																if(num1.substr(2,1)=='0')
																	numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil veinti"+unidades[num1.substr(5,1)];
																else
																	if(num1.substr(1,1)=='0')
																	{
																		if(num1.substr(2,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+" un mil veinti"+unidades[num1.substr(5,1)];
																		else
																			numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil veinti"+unidades[num1.substr(5,1)];
																	}
																	else
																		if(num1.substr(1,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil veinti"+unidades[num1.substr(5,1)];
																		else
																			if(num1.substr(1,1)=='2')
																			{
																				if(num1.substr(1,2)=='21')
																					numero2.value=centenas[num1.substr(0,1)]+" veintiunmil veinti"+unidades[num1.substr(5,1)];
																				else
																					numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil veinti"+unidades[num1.substr(5,1)];
																			}
																			else
																				if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																				{
																					if(num1.substr(2,1)=='1')
																						numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil veinti"+unidades[num1.substr(5,1)];
																					else
																						numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil veinti"+unidades[num1.substr(5,1)];
																				}
														}
														else
															if(num1.substr(4,1)>=3)
															{
																if (num1.substr(1,2)=='00')
																{
																	if(num1.substr(0,1)=='1')
																		numero2.value= "cien mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																	else
																		numero2.value=centenas[num1.substr(0,1)]+" mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																}
																else
																	if(num1.substr(2,1)=='0')
																		numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																	else
																		if(num1.substr(1,1)=='0')
																		{
																			if(num1.substr(2,1)=='1')
																				numero2.value= centenas[num1.substr(0,1)]+" un mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																			else
																				numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																		}
																		else
																			if(num1.substr(1,1)=='1')
																				numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																			else
																				if(num1.substr(1,1)=='2')
																				{
																					if(num1.substr(1,2)=='21')
																						numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																					else
																						numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																				}
																				else
																					if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																					{
																						if(num1.substr(2,1)=='1')
																							numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																						else
																							numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																					}
															}
											
										}
										else
											if(num1.substr(3,1)==1&& num1.substr(4,2)=='00')
											{
												if (num1.substr(1,2)=='00')
												{
													if(num1.substr(0,1)=='1')
														numero2.value= "cien mil cien";
													else
														numero2.value=centenas[num1.substr(0,1)]+" mil cien";
												}
												else
													if(num1.substr(2,1)=='0')
														numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil cien";
													else
														if(num1.substr(1,1)=='0')
														{
															if(num1.substr(2,1)=='1')
																numero2.value= centenas[num1.substr(0,1)]+" un mil cien";
															else
																numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil cien";
														}
														else
															if(num1.substr(1,1)=='1')
																numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil cien";
															else
																if(num1.substr(1,1)=='2')
																{
																	if(num1.substr(1,2)=='21')
																		numero2.value=centenas[num1.substr(0,1)]+" veintiunmil cien";
																	else
																		numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil cien";
																}
																else
																	if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																	{
																		if(num1.substr(2,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil cien";
																		else
																			numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil cien";
																	}
											}
											else
												if(num1.substr(3,1)>1&& num1.substr(4,2)=='00')
												{
													if (num1.substr(1,2)=='00')
													{
														if(num1.substr(0,1)=='1')
															numero2.value= "cien mil "+centenas[num1.substr(3,1)];
														else
															numero2.value=centenas[num1.substr(0,1)]+" mil "+centenas[num1.substr(3,1)];
													}
													else
														if(num1.substr(2,1)=='0')
															numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+centenas[num1.substr(3,1)];
														else
															if(num1.substr(1,1)=='0')
															{
																if(num1.substr(2,1)=='1')
																	numero2.value= centenas[num1.substr(0,1)]+" un mil "+centenas[num1.substr(3,1)];
																else
																	numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)];
															}
															else
																if(num1.substr(1,1)=='1')
																	numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)];
																else
																	if(num1.substr(1,1)=='2')
																	{
																		if(num1.substr(1,2)=='21')
																			numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+centenas[num1.substr(3,1)];
																		else
																			numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+centenas[num1.substr(3,1)];
																	}
																	else
																		if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																		{
																			if(num1.substr(2,1)=='1')
																				numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+centenas[num1.substr(3,1)];
																			else
																				numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)];
																		}
												}
												else
													if(num1.substr(5,1)=='0')
													{
														if (num1.substr(1,2)=='00')
															{
																if(num1.substr(0,1)=='1')
																	numero2.value= "cien mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																else
																	numero2.value=centenas[num1.substr(0,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
															}
															else
																if(num1.substr(2,1)=='0')
																	numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																else
																	if(num1.substr(1,1)=='0')
																	{
																		if(num1.substr(2,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+" un mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																		else
																			numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																	}
																	else
																		if(num1.substr(1,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																		else
																			if(num1.substr(1,1)=='2')
																			{
																				if(num1.substr(1,2)=='21')
																					numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																				else
																					numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																			}
																			else
																				if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																				{
																					if(num1.substr(2,1)=='1')
																						numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																					else
																						numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)];
																				}
													}		
													else
														if(num1.substr(4,1)=='0')
														{
															if (num1.substr(1,2)=='00')
															{
																if(num1.substr(0,1)=='1')
																	numero2.value= "cien mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																else
																	numero2.value=centenas[num1.substr(0,1)]+" mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
															}
															else
																if(num1.substr(2,1)=='0')
																	numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																else
																	if(num1.substr(1,1)=='0')
																	{
																		if(num1.substr(2,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+" un mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																		else
																			numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																	}
																	else
																		if(num1.substr(1,1)=='1')
																			numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																		else
																			if(num1.substr(1,1)=='2')
																			{
																				if(num1.substr(1,2)=='21')
																					numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																				else
																					numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																			}
																			else
																				if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																				{
																					if(num1.substr(2,1)=='1')
																						numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																					else
																						numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+unidades[num1.substr(5,1)];
																				}
														}
														else
															if(num1.substr(4,1)=='1')
															{
																if (num1.substr(1,2)=='00')
																{
																	if(num1.substr(0,1)=='1')
																		numero2.value= "cien mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																	else
																		numero2.value=centenas[num1.substr(0,1)]+" mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																}
																else
																	if(num1.substr(2,1)=='0')
																		numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																	else
																		if(num1.substr(1,1)=='0')
																		{
																			if(num1.substr(2,1)=='1')
																				numero2.value= centenas[num1.substr(0,1)]+" un mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																			else
																				numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																		}
																		else
																			if(num1.substr(1,1)=='1')
																				numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																			else
																				if(num1.substr(1,1)=='2')
																				{
																					if(num1.substr(1,2)=='21')
																						numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																					else
																						numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																				}
																				else
																					if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																					{
																						if(num1.substr(2,1)=='1')
																							numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																						else
																							numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+onceNueve[num1.substr(5,1)];
																					}
															}
															else
																if(num1.substr(4,1)=='2')
																{
																	if (num1.substr(1,2)=='00')
																	{
																		if(num1.substr(0,1)=='1')
																			numero2.value= "cien mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																		else
																			numero2.value=centenas[num1.substr(0,1)]+" mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																	}
																	else
																		if(num1.substr(2,1)=='0')
																			numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																		else
																			if(num1.substr(1,1)=='0')
																			{
																				if(num1.substr(2,1)=='1')
																					numero2.value= centenas[num1.substr(0,1)]+" un mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																				else
																					numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																			}
																			else
																				if(num1.substr(1,1)=='1')
																					numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																				else
																					if(num1.substr(1,1)=='2')
																					{
																						if(num1.substr(1,2)=='21')
																							numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																						else
																							numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																					}
																					else
																						if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																						{
																							if(num1.substr(2,1)=='1')
																								numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																							else
																								numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" veinti"+unidades[num1.substr(5,1)];
																						}
																}
																else
																	if(num1.substr(4,1)>'2' && num1.substr(4,1)<='9')
																	{
																		if (num1.substr(1,2)=='00')
																		{
																			if(num1.substr(0,1)=='1')
																				numero2.value= "cien mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																			else
																				numero2.value=centenas[num1.substr(0,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																		}
																		else
																			if(num1.substr(2,1)=='0')
																				numero2.value= centenas[num1.substr(0,1)]+' '+ decenas[num1.substr(1,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																			else
																				if(num1.substr(1,1)=='0')
																				{
																					if(num1.substr(2,1)=='1')
																						numero2.value= centenas[num1.substr(0,1)]+" un mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																					else
																						numero2.value= centenas[num1.substr(0,1)]+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																				}
																				else
																					if(num1.substr(1,1)=='1')
																						numero2.value= centenas[num1.substr(0,1)]+' '+ onceNueve[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																					else
																						if(num1.substr(1,1)=='2')
																						{
																							if(num1.substr(1,2)=='21')
																								numero2.value=centenas[num1.substr(0,1)]+" veintiunmil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																							else
																								numero2.value= centenas[num1.substr(0,1)]+" "+veinti+unidades[num1.substr(2,1)]+ " mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																						}
																						else
																							if(num1.substr(1,1)>'1' && num1.substr(1,1)<='9')
																							{
																								if(num1.substr(2,1)=='1')
																									numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ " y un mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																								else
																									numero2.value= centenas[num1.substr(0,1)]+' '+decenas[num1.substr(1,1)]+ ' y'+' '+ unidades[num1.substr(2,1)]+" mil "+centenas[num1.substr(3,1)]+" "+decenas[num1.substr(4,1)]+" y "+unidades[num1.substr(5,1)];
																				}
																	}
																				
										

								}
								else
									if(num1.length>6)
										numero2.value='Ingresa un número entre 1 y 999999';
							
						
						
		}
