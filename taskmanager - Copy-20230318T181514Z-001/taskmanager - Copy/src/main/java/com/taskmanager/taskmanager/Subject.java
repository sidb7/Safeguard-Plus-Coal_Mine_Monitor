package com.taskmanager.taskmanager;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="Subject1")
public class Subject {
    @Id
    private int id = 0;
    private String client ;
    
    private String humidity;
    
    private String temperature;
    private String gas;
    private String BPM;
    private int alert;
   

 

    public Subject() {
    }
    public Subject(String humidity, String temperature,String client , int id) {
        super();
        this.humidity = humidity;
        this.temperature = temperature;
        this.client=client;
        this.id = id;
    }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public void setClient(String client) {
        this.client = client;
    }
    public String getClient() {
        return client;
    }
    

    public String gethumidity() {
        return humidity;
    }
    public void sethumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getGas() {
        return gas;
    }
    public void setGas(String gas) {
        this.gas = gas;
    }

    public String gettemperature() {
        return temperature;
    }
    public void settemperature(String temperature) {
        this.temperature = temperature;
    }
   
    public int getAlert() {
        return alert;
    }
    public void setAlert(int alert) {
        this.alert = alert;
    }

    

    public void setBPM(String bPM) {
        BPM = bPM;
    }
    public String getBPM() {
        return BPM;
    }
    
    
}
