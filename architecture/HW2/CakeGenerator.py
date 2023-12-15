from HW2.ItemFabric import ItemFabric
from HW2.CakeReward import CakeReward


class CakeGenerator(ItemFabric):

    def create_item(self):
        print("Создали сундук с тортом")
        return CakeReward()
