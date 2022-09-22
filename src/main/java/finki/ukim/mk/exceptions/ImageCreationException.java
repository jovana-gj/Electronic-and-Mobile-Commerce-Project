package finki.ukim.mk.exceptions;

public class ImageCreationException extends RuntimeException{

    public ImageCreationException(){
        super("Error while saving image");
    }
}
