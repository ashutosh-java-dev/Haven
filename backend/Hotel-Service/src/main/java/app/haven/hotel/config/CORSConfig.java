package app.haven.hotel.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CORSConfig {

    @Bean
    public CorsFilter corsFilter(){
        CorsConfiguration corsConfig = new CorsConfiguration();

        corsConfig.setAllowCredentials(true);
        corsConfig.setAllowedMethods(List.of("GET", "PUT", "POST", "DELETE", "UPDATE", "PATCH", "OPTIONS"));
        corsConfig.setAllowedOrigins(List.of("http://localhost:3000", "http://127.0.0.1:3000"));
        corsConfig.setAllowedHeaders(List.of("Authorization", "Content-Type"));

        corsConfig.setExposedHeaders(List.of("Authorization"));

        corsConfig.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsFilter(source);
    }
}
