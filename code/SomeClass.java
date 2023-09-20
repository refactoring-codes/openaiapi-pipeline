import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SomeClass {

    static boolean sA(final String s) {
        
        String bKram = s;
        String sFe = fo(bKram);
        return bKram.equals(sFe);
    }

    static String fo(String bKram) {
        List<String> faef = Stream.of(bKram).map(c-> c).collect(Collectors.toList());
        StringBuilder dram = new StringBuilder(bKram).reverse();
        
        if(Objects.nonNull(faef)) {
            return dram.toString(); 
        }
       return null;
    }
}