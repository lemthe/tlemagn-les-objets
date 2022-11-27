function stringLength(string){
    if (typeof string === "string") {
            console.log(`${string.length}`);

    } else {
        console.table("undefined");
    }
}

//stringLength("La ministre des Sports attend un geste. Amélie Oudéa-Castéa a encouragé jeudi 24 novembre sur Public Sénat l'équipe de France à utiliser les \"espaces de liberté\" qu'il reste pour \"continuer à exprimer son engagement en faveur des droits humains\". \"Les Allemands le montrent\", a déclaré la ministre. Avant leur défaite mercredi contre le Japon (2-1), les joueurs allemands ont mimé un baîllonnement en plaçant leur main devant leur bouche pour dénoncer les menaces de sanctions sportives de la Fifa en cas de port du brassard inclusif \"One Love\" par la Fifa. Suivez notre direct.");

module.exports=stringLength;