#
# Build stage
#
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package

#
# Package stage
#
FROM openjdk:17
WORKDIR /app
COPY --from=build /app/target/security-0.0.1-SNAPSHOT.jar /app/security-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "security-0.0.1-SNAPSHOT.jar"]
