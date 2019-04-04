## Matrix

La matrice è una tabella riche/colonne con una/due immagini in ogni cella.
Nel caso delle decorazioni e degli npc avremmo quindi due immagini sovrapposte.
Ogni immagine ha un **name** che ne rappresenta il tipo (floors, walls, decors..)
e un **code** che ne rappresenta l'id dell'immagine.

## Tiles

Contiene (suddivisi per tipo) tutti gli elementi che si possono piazzare nella tabella una volta selezionati.
Due variabili (**tool_id** e **tool_type**) memorizzano l'elemento selezionato. Viene inoltre mostrata un anteprima
di dale elemento in un immagine nel info chiamata **tool_image**

## Info

Vengono mostrate a video le due variabili **tool_[...]** e mostrata l'anteprima del elemento selezionato

## Save

Ritrasforma la tabella (**matrix**) in un json che poi andrà a rispedire al server con il nome dato.
