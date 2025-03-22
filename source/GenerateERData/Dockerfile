# --------------------------------------------
# Build Stage: Compiles and Publishes the App
# --------------------------------------------
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project file and restore dependencies
COPY ["GenerateERData.csproj", "./"]
RUN dotnet restore "./GenerateERData.csproj"

# Copy all files and build the project
COPY . .
RUN dotnet publish "GenerateERData.csproj" -c Release -o /app/publish

# --------------------------------------------
# Runtime Stage: Runs the Published Application
# --------------------------------------------
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# Copy the published files from the build stage
COPY --from=build /app/publish .

# Ensure the application listens on the correct ports
ENV ASPNETCORE_URLS=http://+:8080

# Expose the API port
EXPOSE 8080

# Start the application
ENTRYPOINT ["dotnet", "GenerateERData.dll"]


