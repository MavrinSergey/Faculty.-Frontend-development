from HW2.ItemFabric import ItemFabric
from HW2.GemReward import GemReward


class GemGenerator(ItemFabric):

    def create_item(self):
        print("Создали сундук (изумруд)")
        return GemReward()
