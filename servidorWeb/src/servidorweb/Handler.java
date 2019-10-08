package servidorweb;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Date;
import java.util.StringTokenizer;
import javax.swing.JOptionPane;

/*@author Isaac*/
public class Handler implements Runnable
{
    protected Socket socket;
    protected PrintWriter pw;
    protected String FileName;
    protected BufferedReader br;
    protected BufferedOutputStream bos;
    
    public Handler(Socket _socket) throws Exception
    {            
        this.socket=_socket;
    }

    public void run()
    {
        try
        {
            br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            bos = new BufferedOutputStream(socket.getOutputStream());
            pw = new PrintWriter(new OutputStreamWriter(bos));
            String line = br.readLine();
            
            if(line == null)
            {
                pw.print("<html><head><title>Servidor WEB");
                pw.print("</title><body bgcolor=\"#AACCFF\"<br>Linea Vacia</br>");
                pw.print("</body></html>");
                socket.close();
                return;
            }
            
            System.out.println("\nCliente Conectado desde: "+socket.getInetAddress());
            System.out.println("Por el puerto: "+socket.getPort());
            System.out.println("Recurso (datos): "+line+"\r\n\r\n");
            System.out.println("--> " + line);
            
            
            if(line.indexOf("?") == -1 && !line.toUpperCase().startsWith("POST")) //Para mandar al inicio
            {
                getArch(line);
                if(FileName.compareTo("")==0)
                {                            
                    SendA("index.htm");
                }
                else
                {                        
                    SendA(FileName);
                }
                System.out.println("**"+FileName);
            }
            else if(line.toUpperCase().startsWith("GET"))
            {
                    StringTokenizer tokens=new StringTokenizer(line,"?");
                    String req_a = tokens.nextToken();
                    String req = tokens.nextToken();
                    System.out.println("HERE");
                    System.out.println("Token1: "+req_a+"\r\n\r\n");
                    System.out.println("Token2: "+req+"\r\n\r\n");
                    pw.println("HTTP/1.0 200 Okay");
                    pw.flush();
                    pw.println();
                    pw.flush();
                    pw.print("<html><head><title>SERVIDOR WEB");
                    pw.flush();
                    pw.print("</title></head><body bgcolor=\"#AACCFF\"><center><h1><br>Parametros Obtenidos..</br></h1>");
                    pw.flush();
                    pw.print("<h3><b>"+req+"</b></h3>");
                    pw.flush();
                    pw.print("</center></body></html>");
                    pw.flush();
            }
            else
            {
                if(line.toUpperCase().startsWith("POST"))
                {
                    pw.println("HTTP/1.0 200 Okay");
                    
                    pw.flush();
                }
                else
                {
                        String sb = "";
                       sb = sb +"HTTP/1.0 200 ok\n";
                       sb = sb +"Server: Axel Server/1.0 \n";
                       sb = sb +"Date: " + new Date()+" \n";
                       sb = sb +"Content-Type: application/x-www-form-urlencoded \n";
                       sb = sb +"\n";
                       bos.write(sb.getBytes());
                       bos.flush();
                }                                 
            }
            pw.flush();
            bos.flush();
        }
        catch(Exception e)
        {       
            e.printStackTrace();
        }
        try{
                socket.close();
        }
        catch(Exception e)
        {                
            e.printStackTrace();
        }
    }  
    
    public void getArch(String line)            
    {
        int i;
        int f;
        if(line.toUpperCase().startsWith("GET"))
        {
            i=line.indexOf("/");
            f=line.indexOf(" ",i);
            FileName = line.substring(i+1,f);
        }
    }
    
                                   
    public void SendA(String arg)             
    {                    
        try{                             
            int b_leidos=0;
            BufferedInputStream bis2 = new BufferedInputStream(new FileInputStream(arg));
            byte[] buf = new byte[1024];
            int tam_bloque=0;
            if(bis2.available()>=1024)
            {
               tam_bloque=1024;
            }
            else
            {
               bis2.available();
            }

            int tam_archivo=bis2.available();
            /***********************************************/
                       String sb = "";
                       sb = sb +"HTTP/1.0 200 ok\n";
                       sb = sb +"Server: Axel Server/1.0 \n";
                       sb = sb +"Date: " + new Date()+" \n";
                       sb = sb +"Content-Type: text/html \n";
                       sb = sb +"Content-Length: "+tam_archivo+" \n";
                       sb = sb +"\n";
                       bos.write(sb.getBytes());
                       bos.flush();
            /***********************************************/

            while((b_leidos = bis2.read(buf,0,buf.length))!=-1)
            {
               bos.write(buf,0,b_leidos);
            }
            bos.flush();
            bis2.close();                      
        }                       
        catch(Exception e)
        {
            System.out.println(e.getMessage());
        }        
    }
}
