package servidorweb;
import java.io.File;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/*@author Isaac*/
public class ServidorWeb implements Runnable
{           
    ServerSocket server;  
    private final ExecutorService pool;
    public static final int PUERTO = 8000;
    
    public ServidorWeb() throws Exception
    {
        System.out.println("Iniciando Servidor...");
        this.server = new ServerSocket(PUERTO);
        System.out.println("¡Servidor iniciado!");
        System.out.println("Esperando a un cliente...");        
        //Iniciamos el pool de hilos
        pool = Executors.newFixedThreadPool(5);          
    }
    
    public static void main(String[] args)
    {
        File prueba = new File("borrar\\archivo.txt"); // archivo sin permisos de escritura
        prueba.setReadOnly();
        
        try {
            ServidorWeb sw = new ServidorWeb();            
            Thread t = new Thread(sw);
            
            t.start();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }            

    @Override
    public void run() 
    {
        try
        {
            for(;;)
            {                               
              pool.execute(new Handler(server.accept()));                                
            }
        }catch(Exception e)
        {
            pool.shutdown();
            e.printStackTrace();
        }
        
    }
}
