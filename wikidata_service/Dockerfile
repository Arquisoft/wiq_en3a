FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["WikiDataTest/WikiDataTest.csproj", "WikiDataTest/"]
RUN dotnet restore "./WikiDataTest/./WikiDataTest.csproj"
COPY . .
WORKDIR "/src/WikiDataTest"
RUN dotnet build "./WikiDataTest.csproj" -c %BUILD_CONFIGURATION% -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./WikiDataTest.csproj" -c %BUILD_CONFIGURATION% -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WikiDataTest.dll"]

EXPOSE 7259
